import {
    getFurionTokenABI,
    getVoteEscrowedFurionABI,
    getIncomeMakerABI,
    getIncomeSharingVaultABI,
    getAddress
} from "@/utils/common/contractABI";
import { getContract, fromWei } from "@/utils/common";
import { getTokenPrice } from "@/api/furion_farming";

const SECONDS_PER_DAY = 24 * 60 * 60;

const INCOME_SHARE_REWARD_TOKENS = {
    'FUR':  '0xb443675fc068fB3172D0Ad732a2Be60dCDf14177',
    'WETH': '0x0000000000000000000000000000000000000000',
    'USDT': '0x0000000000000000000000000000000000000000',  
}

export const User = {
    current_fur_balance:            '0.000',
    current_veFur_balance:          '0.000',
    current_fur_stake:              '0.000',
    current_veFur_stake:            '0.000',
    current_fur_stake_locked:       '0.000',
    total_user_fur_stake:           '0.000',
    pending_fur_reward:             '0.000',
    pending_veFur_reward:           '0.000',
    total_veFur_reward:             '0.000',
    redeemed_veFur_reward:          '0.000',
    redeemed_veFur_locked_reward:   '0.000',
    redeemed_fur_locked_reward:     '0.000',

    total_fur_stake:                '0.000',
    total_veFur_stake:              '0.000',
    total_fur_supply:               '0.000',
    total_veFur_supply:             '0.000',

    fur_address:                    '0x000000000000000000000000000000000000000',
    veFur_address:                  '0x000000000000000000000000000000000000000',
    income_maker_address:           '0x000000000000000000000000000000000000000',
    income_share_vault_address:     '0x000000000000000000000000000000000000000',

    income_reward_tokens:           {
                                    1: '0x00000000000000000000000000000000000000',
                                    2: '0x00000000000000000000000000000000000000',
                                    3: '0x00000000000000000000000000000000000000',
                                    },

    fur_price:                      0.0,
    veFur_price:                    0.0,
    staked_fur_value:               '0',
    staked_veFur_value:             '0',

    fur_contract:                   {},
    veFur_contract:                 {},
    income_maker_contract:          {},
    income_share_vault_contract:    {},

    fur_reward_per_day:             '0',
    veFur_reward_per_day:           '0',
}


export const InitUserInfo = async (user, chainId) => {
    try {
        let network = '';
        if (chainId == 5) {
            network = 'goerli';
        } else if (chainId == 1) {
            network = 'mainnet';
        }
        const addresses = getAddress();
        user.fur_address = addresses['FurionToken'];
        user.veFur_address = addresses['VoteEscrowedFurion'];
        user.income_maker_address = addresses['IncomeMaker'];
        user.income_share_vault_address = addresses['IncomeSharingVault'];
        user.fur_contract = await getContract(await getFurionTokenABI(), addresses['FurionToken']);
        user.veFur_contract = await getContract(await getVoteEscrowedFurionABI(), addresses['VoteEscrowedFurion']);
        user.income_maker_contract = await getContract(await getIncomeMakerABI(), addresses['IncomeMaker']);
        user.income_share_vault_contract = await getContract(await getIncomeSharingVaultABI(), addresses['IncomeSharingVault']);

        const total_fur_stake = await user.fur_contract.methods.balanceOf(user.veFur_address).call();
        user.total_fur_stake = fromWei(total_fur_stake, 18);
        
        const total_fur_supply = await user.fur_contract.methods.totalSupply().call();
        const total_veFur_supply = await user.veFur_contract.methods.totalSupply().call();
        user.total_fur_supply = fromWei(total_fur_supply, 18);
        user.total_veFur_supply = fromWei(total_veFur_supply, 18);
        
        const fur_price = await getPrice('FUR', network);
        user.fur_price = fur_price;
        user.veFur_price = fur_price/100;

        // Initialize the reward tokens for the available income share pools
        const next_pool_Id = await user.income_share_vault_contract.methods.nextPool().call();
        for(let Id = 1; Id < next_pool_Id; Id ++) {
            const pool_info = await user.income_share_vault_contract.methods.pools(Id).call();
            if (pool_info.available) {
                user.income_reward_tokens[Id] = pool_info.rewardToken;
                user.fur_reward_per_day = parseFloat(fromWei(pool_info.rewardPerSecond, 18)) * SECONDS_PER_DAY;
                user.total_veFur_stake = fromWei(pool_info.totalAmount, 18);
            }
        }
        //console.log('The user is Initialized: ', user);
        return user;

    } catch(e) {
        console.warn(e);
    }
    
}

export const UpdateUserInfo = async(user, account) => {
    try {
        const total_fur_stake = await user.fur_contract.methods.balanceOf(user.veFur_address).call();
        user.total_fur_stake = fromWei(total_fur_stake, 18);
        const pool = await user.income_share_vault_contract.methods.pools(1).call();
        user.total_veFur_stake = fromWei(pool.totalAmount, 18);

        //console.log('Total Stake');
        
        const total_fur_supply = await user.fur_contract.methods.totalSupply().call();
        const total_veFur_supply = await user.veFur_contract.methods.totalSupply().call();
        user.total_fur_supply = fromWei(total_fur_supply, 18);
        user.total_veFur_supply = fromWei(total_veFur_supply, 18);

        //console.log('Supply');

        const cur_fur_balance = await user.fur_contract.methods.balanceOf(account).call();
        const cur_veFur_balance = await user.veFur_contract.methods.balanceOf(account).call();
        user.current_fur_balance = fromWei(cur_fur_balance, 18);
        user.current_veFur_balance = fromWei(cur_veFur_balance, 18);

        //console.log('Balance');


        // total veFur amt stake by user for pool 1, reward token is 'FUR'
        let info = await user.income_share_vault_contract.methods.users(1, account).call();
        user.current_veFur_stake = fromWei(info['totalAmount'].toString(), 18);
        info = await user.veFur_contract.methods.users(account).call();
        user.current_fur_stake = fromWei(info['amount'], 18);
        user.current_fur_stake_locked = fromWei(info['amountLocked'], 18);
        user.redeemed_veFur_locked_reward = (parseFloat(user.current_fur_stake_locked) * 100.00).toFixed(2);
        user.redeemed_veFur_reward = (parseFloat(user.current_veFur_balance) - parseFloat(user.redeemed_veFur_locked_reward)).toFixed(2);
        user.total_user_fur_stake = ( parseFloat(user.current_fur_stake) + parseFloat(user.current_fur_stake_locked) ).toFixed(2);
        user.total_veFur_reward = (100.00 * parseFloat(user.total_user_fur_stake)).toFixed(2);

        //console.log('Current Stake')

        const staked_fur_value = (parseFloat(user.current_fur_stake) * user.fur_price).toFixed(2);
        user.staked_fur_value = staked_fur_value;
        const staked_veFur_value = (parseFloat(user.current_veFur_stake) * user.veFur_price).toFixed(2);
        user.staked_veFur_value = staked_veFur_value;

        //console.log('Staked Value')

        const pending_veFur_reward = await user.veFur_contract.methods.claimable(account).call();
        user.pending_veFur_reward = fromWei(pending_veFur_reward, 18);
        const pending_fur_reward = await user.income_share_vault_contract.methods.pendingReward(1, account).call();
        user.pending_fur_reward = fromWei(pending_fur_reward, 18);

        //console.log('Pending Rewards');
        //console.log('Updated User: ', user);
        return user;

    } catch(e) {
        console.warn(e);
    }
}

// returns a price of the specified token
const getPrice = async(token, network) => {
    let token_data = await getTokenPrice(token, network);
    return token_data['data']['data'];
}

