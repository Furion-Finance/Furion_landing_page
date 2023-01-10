import { getNftActivity, postNftActivity, postNftActivityByArray} from "@/api/furion_activity";
import axios from 'axios'

export const nft_activity = {
    init: false,
    activity_list: [
        {
            'project':'Project Loading',
            'token_id': 0,
            'address': '0x',
            'event': 'Bid',
            'event_type': 'success',
            'eth_price': 99.99,
            'from_user': 'user_loading',
            'to_user': 'user_loading',
            'tx_hash': '0x',
            'date': "now",
        },
        {
            'project':'Project Loading',
            'token_id': 0,
            'address': '0x',
            'event': 'Bid',
            'event_type': 'success',
            'eth_price': 99.99,
            'from_user': 'user_loading',
            'to_user': 'user_loading',
            'tx_hash': '0x',
            'date': 'now',
        }
    ],
};

export const initNftActivity = async (network,nft_address,token_id) => {
    let activity_info = { activity_init: false, activity_list: [] };
    let result = await getNftActivity(network,nft_address,token_id);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];
    // console.log(raw_data)

    for (let i = raw_data.length-1; i >= 0; i--) {
        let temp = {
            project: raw_data[i][0],
            token_id: token_id,
            address: nft_address,
            event: raw_data[i][3],
            event_type: raw_data[i][4],
            eth_price: Number(raw_data[i][5].toString().match(/^\d+(?:\.\d{0,2})?/)),
            from_user: raw_data[i][6],
            to_user: raw_data[i][7],
            tx_hash : raw_data[i][8],
            date: raw_data[i][9].substring(0,10),
        };
        // console.log(raw_data[i][5].toString().match(/^\d+(?:\.\d{0,2})?/))
        final_result.push(temp);
    }

    // console.log(final_result)


    activity_info.activity_list = final_result;
    activity_info.init = true;
    return activity_info;
}

export const intoNftActivity = async (data) => {
    axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
        let res = await postNftActivity(data);
        return res;
}

export const intoNftActivityByArray = async (network, data) => {
    let result = JSON.stringify(data);
    axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
        let res = await postNftActivityByArray(network, result);
        return res;
}