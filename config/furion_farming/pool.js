import {
    getMockUSDABI,
    getFarmingPoolUpgradeableABI,
    getAddress,
} from "@/local/utils/common/contractABI";

import { getContract, fromWei, getNetwork } from "@/local/utils/common";
import { getLatestSummary } from "@/api/furion_swap";
import { getTokenPrice } from "@/api/furion_farming";

import { getFarmingPools } from "@/utils/common/poolAddress";

const SECONDS_PER_DAY = 24 * 60 * 60;
const token_images = {
    'FUR': require('@/assets/images/liquidity/tokens/FUR.png'),
    'ETH': require('@/assets/images/liquidity/tokens/ETH.png'),
    'USDT': require('@/assets/images/liquidity/tokens/USDT.png')
}

const farming_pools = getFarmingPools();

/**
 * Get Lp_Token_Address by token0 and token1 symbol
 * For example, all pools with FUR as token0 can be fetched as an object with token1 as
 * a key. So, FUR/ETC is mapped as 'FUR': {'ETH': lp_token_address, 'X': lp_token_address} */

export const InitialPoolList = () => {
    let default_values = [];
    //console.log('Farming pools', farming_pools);
    for (let index in farming_pools) {
        let temp_name = farming_pools[index]['name'];
        let token0, token1, lp_token;
        if(temp_name.indexOf('-')>0){
            token0 = temp_name.split('-')[0];
            token1 = temp_name.split('-')[1];
            lp_token = 'FSL';
        }else{
            token0 = temp_name;
            token1 = '';
            lp_token = temp_name;
        }
        let single_record = {
            pool_name: temp_name.replace('-', '/'),
            token_0: token0,
            token_1: token1,
            token_0_image: token_images[token0],
            token_1_image: token_images[token1],

            lp_token: lp_token,
            lp_token_address: farming_pools[index]['address'],
            lp_token_contract: {},
            lp_token_decimal: '18',
            lp_token_price: 0.0,
            lp_token_value: '0.000',

            reward_token: 'FUR',
            reward_token_decimal: '18',

            farming_address: '0x000000000000000000000000000000000000',
            farming_contract: {},

            pool_Id: farming_pools[index]['poolId'],

            user_balance: '0.000',
            user_stake: '0.000',
            user_reward: '0.000',
            formatted_balance: '0.000',
            formatted_stake: '0.000',
            formatted_reward: '0.000',

            allowance_liquidity: 0,
            liquidity_approved: false,

            amt: undefined,
            percent: 0,
            type: '1',
            index: 0,

            tvl: '0.000',
            apr: '0.000',
            reward_per_day: '0.000',

            initialized: false,

        }
        default_values.push(single_record);
    }
    //console.log('Default value', default_values)
    return default_values
}

export const InitFarmingPool = async (pool, index, chainId) => {
    try {
        pool.index = index;
        const lp_token_contract = await getContract(await getMockUSDABI(), pool.lp_token_address);
        const lp_token_decimal = parseInt(await lp_token_contract.methods.decimals().call());

        // store contract and decimals in a pool for later use
        pool.lp_token_contract = lp_token_contract;
        pool.lp_token_decimal = lp_token_decimal.toString();

        //console.log('Lp token init');

        const addresses = await getAddress();
        pool.farming_address = addresses['FarmingPoolUpgradeable'];
        // get farming contract
        const farming_contract = await getContract(await getFarmingPoolUpgradeableABI(), pool.farming_address);
        pool.farming_contract = farming_contract;

        //console.log('farming contract init');

        const poolList = await farming_contract.methods.getPoolList().call();
        let Id = 1;
        for (; Id < poolList.length; Id++) {
            if (poolList[Id].lpToken == pool.lp_token_address) {
                pool.pool_Id = Id;
                break;
            }
        }

        //console.log('Id init ', pool.pool_Id);
        // set up reward per day
        const single_pool = await farming_contract.methods.poolList(pool.pool_Id).call();
        const reward = fromWei(single_pool.basicFurionPerSecond, 18);
        pool.reward_per_day = (reward * SECONDS_PER_DAY);

        //console.log('rewards init');


        // initialize tvl and apr of a pool
        let summary = await getPoolSummary(pool, chainId);
        pool.tvl = summary['tvl'];
        pool.apr = summary['apr'];

        // calculate the price of liquidity token
        const lp_total = fromWei(
            await lp_token_contract.methods.totalSupply().call(),
            lp_token_decimal)

        pool.lp_token_price = (parseFloat(summary['tvl']) / parseFloat(lp_total));

        //console.log('Init finished');
        return pool;

    } catch (e) {
        //console.log('[Init Farming Pool] Error initializing the pool');
        console.warn(e);
        return;
    }
}

// function returns pool summary in terms of its tvl and apr
export const getPoolSummary = async (pool, chainId) => {
    let summary = {
        'tvl': '',
        'apr': '',
    }

    try {
        let network = '';
        if (chainId == 5) {
            network = 'goerli';
        } else if (chainId == 1) {
            network = 'mainnet';
        }

        const lp_token_decimal = parseInt(pool.lp_token_decimal);
        const lp_token_contract = pool.lp_token_contract;

        const lp_added = fromWei(
            await lp_token_contract.methods.balanceOf(pool.farming_address).call(),
            lp_token_decimal);

        const lp_total = fromWei(
            await lp_token_contract.methods.totalSupply().call(),
            lp_token_decimal);

        if (pool.token_1 == '') {
            const token_0_price = await getPrice(pool.token_0, network);
            summary['tvl'] = lp_added * token_0_price;
            const fur_price = await getPrice('FUR', network);
            pool.fur_price = fur_price;
            summary['apr'] = (parseFloat(pool.reward_per_day) * fur_price) / (365 * summary['tvl']);
        } else {
            const price_result = await getLatestSummary(pool.token_0, pool.token_1, network);
            let data = price_result['data'];
            const tvl = parseFloat(data['tvl']) * (parseFloat(lp_added) / parseFloat(lp_total));
            summary['tvl'] = tvl;

            const fur_price = await getPrice('FUR', network);
            const apr = (parseFloat(pool.reward_per_day) * parseFloat(fur_price)) / (365 * tvl);
            summary['apr'] = apr;
        }
        summary['tvl'] = parseFloat(summary['tvl']).toFixed(6);
        summary['apr'] = parseFloat(summary['apr']).toFixed(6);

        //console.log("Summary finished");


    } catch (e) {
        console.warn(e);
        summary['tvl'] = '0.000';
        summary['apr'] = '0.000';
    }

    return summary;
}

// returns a price of the specified token
const getPrice = async (token, network) => {
    let token_data = await getTokenPrice(token, network);
    return token_data['data']['data'];
}