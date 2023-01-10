import {
    getFurionTokenABI,
    getMockUSDABI,
    getFurionSwapFactoryABI,
    getFurionSwapRouterABI,
    getFurionSwapPairABI,
    getAddress
} from "@/utils/common/contractABI";

import { getFurionSwapSummary } from "@/api/furion_swap";

import { getContract, fromWei } from "@/utils/common";

import { newMultiCallProvider } from "@/utils/web3/multicall";
import { getChainId, WETH_ADDRESS } from "@/utils/web3";

import { getFurionSwapPairs } from "@/utils/common/poolAddress";

const deployed_pools = getFurionSwapPairs();
const address_info = getAddress();
const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const token_info = [
    { symbol: 'ETH', address: address_info['WETH'], market_address: "0xc04609A609af7ED23856a4C26cBbD222C128D2Cb", image: require("@/assets/images/liquidity/tokens/ETH.png") },
    //{ symbol: 'USDT', address: address_info['MockUSD'], market_address: "0xF566e3D960c0a6c257c36Ee4777195F0aDB7FA3f", image: require("@/assets/images/liquidity/tokens/USDT.png") },
    //{ symbol: 'FUR', address: address_info['FurionToken'], market_address: "0xFaD887C8fB4Ed00042207d747a590D0bc7b3195e", image: require('@/assets/images/liquidity/tokens/FUR.png') },
    { symbol: 'FFT-BAYC', address: "0x4c711efa05b78582f07D9d960B1dAdDe95688166", market_address: "", image: require('@/assets/images/liquidity/tokens/FUR.png') },
    { symbol: 'FFT-BLUECHIP', address: "0x53c85C8f5dA3B098DF30204C0eA460602eC2BFC1", market_address: "", image: require('@/assets/images/liquidity/tokens/FUR.png') },
    { symbol: 'FFT-DARKHORSE', address: "0xce8791504fb07A10c82216C3366BdF7130fB24Ac", market_address: "", image: require('@/assets/images/liquidity/tokens/FUR.png') },
]

export const swap_info = {
    token_0: deployed_pools[0].name0,
    token_1: deployed_pools[0].name1,
    token_0_address: deployed_pools[0].token0,
    token_1_address: deployed_pools[0].token1,
    token_0_contract: {},
    token_1_contract: {},
    token_0_image: require('@/assets/images/liquidity/tokens/FUR.png'),
    token_1_image: require("@/assets/images/liquidity/tokens/" + deployed_pools[0].name1 +  ".png"),
    token_0_decimal: 18,
    token_1_decimal: 18,

    pair_address: '0x',
    pair_contract: {},
    fee_rate: 0,
    token_0_balance: 0,
    token_1_balance: 0,
    token_0_reserve: 999.99,
    token_1_reserve: 999.99,

    router_address: '0x000000000000000000000000000000000000000',
    router_contract: {},

    pool_liquidity: 999.99,
    pair_liquidity: 999.99,
    user_liquidity: 999.99,
    user_liquidity_proportion: 99.99,
    token_0_pooled: 99.99,
    token_1_pooled: 99.99,

    token_0_eth_pair: '0x',
    token_1_eth_pair: '0x',
    token_0_eth_reserves: {token_0_reserve: 999.99, token_1_reserve: 999.99},
    token_1_eth_reserves: {token_0_reserve: 999.99, token_1_reserve: 999.99},
    eth_address: address_info['WETH'],
}

export const initFurionSwapInfo = async (single_swap, chainId) => {
    const multicall = newMultiCallProvider(chainId);
    let decimal_result = [];
    if (single_swap.token_0 == 'ETH') {
        if (chainId == 5) {
            single_swap.token_0_address = WETH_ADDRESS['goerli'];
        } else if (chainId == 1) {
            single_swap.token_0_address = WETH_ADDRESS['mainnet'];
        }
        single_swap.token_0_contract = {};
        single_swap.token_0_decimal = 18;
        const token_1_contract = await getContract(await getMockUSDABI(), single_swap.token_1_address);
        let multicall_list = [token_1_contract.methods.decimals()];

        decimal_result = [18, (await multicall.aggregate(multicall_list))[0]];
        single_swap.token_1_decimal = decimal_result[1];
        single_swap.token_1_contract = token_1_contract;
    } else if (single_swap.token_1 == 'ETH') {
        if (chainId == 5) {
            single_swap.token_1_address = WETH_ADDRESS['goerli'];
        } else if (chainId == 1) {
            single_swap.token_1_address = WETH_ADDRESS['mainnet'];
        }
        single_swap.token_1_contract = {};
        single_swap.token_1_decimal = 18;
        const token_0_contract = await getContract(await getMockUSDABI(), single_swap.token_0_address);
        let multicall_list = [token_0_contract.methods.decimals()];

        decimal_result = [(await multicall.aggregate(multicall_list))[0], 18];
        single_swap.token_0_decimal = decimal_result[0];
        single_swap.token_0_contract = token_0_contract;
    }
    else {
        // initial token contract and get decimal for these two tokens
        const token_0_contract = await getContract(await getMockUSDABI(), single_swap.token_0_address);
        const token_1_contract = await getContract(await getMockUSDABI(), single_swap.token_1_address);

        let multicall_list = [token_0_contract.methods.decimals(), token_1_contract.methods.decimals()];

        decimal_result = await multicall.aggregate(multicall_list);

        single_swap.token_0_decimal = decimal_result[0];
        single_swap.token_1_decimal = decimal_result[1];
        single_swap.token_0_contract = token_0_contract;
        single_swap.token_1_contract = token_1_contract;
    }

    // initialize furion swap relavent contracts
    const factory = await getContract(await getFurionSwapFactoryABI(), address_info['FurionSwapFactory']);
    try {
        const pair_address = await factory.methods.getPair(single_swap.token_0_address, single_swap.token_1_address).call();
        //console.log("[InitFurionSwap]: Pair address = ", pair_address);
        if (pair_address != ZERO_ADDRESS) {
            // console.log("Pool Swap Info Init")
            single_swap.pair_address = pair_address;
            const pair = await getContract(await getFurionSwapPairABI(), pair_address);
            single_swap.pair_contract = pair;
            const fee_rate = await pair.methods.feeRate().call();
            single_swap.fee_rate = parseInt(fee_rate) / 1000;
            // get reserves
            const reserves = await pair.methods.getReserves().call();
            if (single_swap.token_0_address < single_swap.token_1_address) {
                single_swap.token_0_reserve = parseFloat(fromWei(reserves[0], parseInt(decimal_result[0])));
                single_swap.token_1_reserve = parseFloat(fromWei(reserves[1], parseInt(decimal_result[1])));
            } else {
                single_swap.token_0_reserve = parseFloat(fromWei(reserves[1], parseInt(decimal_result[0])));
                single_swap.token_1_reserve = parseFloat(fromWei(reserves[0], parseInt(decimal_result[1])));
            }
        } else {
            //console.log("ETH swap info init");
            single_swap.token_0_reserve = 0;
            single_swap.token_1_reserve = 0;
            const token_0_eth_pair_address = await factory.methods.getPair(single_swap.token_0_address, single_swap.eth_address).call();
            const token_0_eth_pair = await getContract(await getFurionSwapPairABI(), token_0_eth_pair_address);
            single_swap.token_0_eth_pair = token_0_eth_pair;
            const token_1_eth_pair_address = await factory.methods.getPair(single_swap.token_1_address, single_swap.eth_address).call();
            const token_1_eth_pair = await getContract(await getFurionSwapPairABI(), token_1_eth_pair_address);
            single_swap.token_1_eth_pair = token_1_eth_pair;
    
            const token_0_eth_reserves = await token_0_eth_pair.methods.getReserves().call();
            if (single_swap.token_0_address < single_swap.eth_address) {
                single_swap.token_0_eth_reserves.token_0_reserve = parseFloat(fromWei(token_0_eth_reserves[0], parseInt(decimal_result[0])));
                single_swap.token_0_eth_reserves.token_1_reserve = parseFloat(fromWei(token_0_eth_reserves[1], 18));
            } else {
                single_swap.token_0_eth_reserves.token_0_reserve = parseFloat(fromWei(token_0_eth_reserves[1], 18));
                single_swap.token_0_eth_reserves.token_1_reserve = parseFloat(fromWei(token_0_eth_reserves[0], parseInt(decimal_result[0])));
            }
    
            const token_1_eth_reserves = await token_1_eth_pair.methods.getReserves().call();
            if (single_swap.token_1_address < single_swap.eth_address) {
                single_swap.token_1_eth_reserves.token_0_reserve = parseFloat(fromWei(token_1_eth_reserves[0], parseInt(decimal_result[1])));
                single_swap.token_1_eth_reserves.token_1_reserve = parseFloat(fromWei(token_1_eth_reserves[1], 18));
            } else {
                single_swap.token_1_eth_reserves.token_0_reserve = parseFloat(fromWei(token_1_eth_reserves[1], 18));
                single_swap.token_1_eth_reserves.token_1_reserve = parseFloat(fromWei(token_1_eth_reserves[0], parseInt(decimal_result[1])));
            }
        }
        single_swap.pool_liquidity = single_swap.token_0_reserve * single_swap.token_1_reserve;
    } catch (e) {
        console.warn('Initialize trading pair failed', e);
    }

    // initialize router contract
    const router = await getContract(await getFurionSwapRouterABI(), '');
    single_swap.router_contract = router;
    single_swap.router_address = await getAddress()['FurionSwapV2Router'];
    //console.log("Single Swap: ", single_swap);
    return single_swap;
}

export const getPriceInfo = async(token_0, token_1, frequency, chainId) => {
    let network;
    if(chainId == 5){
        network = 'goerli';
    }else if(chainId == 1){
        network = 'mainnet';
    }
    const price_result = await getFurionSwapSummary(token_0, token_1, frequency, network);
    // console.log('Swap price result', price_result);
    return price_result['data']['data'];
}