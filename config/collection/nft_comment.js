import { getNftComment, getNftReply, postNftComment, postNftReply } from "@/api/furion_comment";
import axios from 'axios'

export const nft_comment = {
    init: false,
    comment_list: [],
};
export const initNftComment = async (network,nft_address,token_id) => {
    let comment_info = { comment_init: false, comment_list: [] };
    let result = await getNftComment(network,nft_address,token_id);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];
    // console.log(raw_data)

    for (let i = raw_data.length-1; i >= 0; i--) {
        let temp = {
            id: raw_data[i][0],
            address: nft_address,
            token_id: token_id,
            content: raw_data[i][3],
            from_uid: raw_data[i][4],
            from_user: raw_data[i][5],
            from_avatar: raw_data[i][6],
            reply_count: raw_data[i][7],
            created_time: raw_data[i][8].substring(0,10),
            show: false,
            show_reply: false,
        };
        final_result.push(temp);
    }

    // console.log(final_result)


    comment_info.comment_list = final_result;
    comment_info.comment_init = true;
    return comment_info;
}


export const nft_reply = {
    init: false,
    reply_list: []
};
export const initNftReply = async (network,comment_id) => {
    let reply_info = { reply_init: false, reply_list: [] };

    let result = await getNftReply(network,comment_id);
    // console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];

    for (let i = raw_data.length-1; i >= 0; i--) {
        let temp = {
            id: raw_data[i][0],
            comment_id: comment_id,
            reply_id: raw_data[i][2],
            reply_type: raw_data[i][3],
            content: raw_data[i][4],
            from_uid: raw_data[i][5],
            from_user: raw_data[i][6],
            from_avatar: raw_data[i][7],
            to_uid: raw_data[i][8],
            to_user: raw_data[i][9],
            to_avatar: raw_data[i][10],
            created_time: raw_data[i][11].substring(0,10),
        };
        console.log(temp)
        final_result.push(temp);
    }

    // console.log(final_result)


    reply_info.reply_list = final_result;
    reply_info.reply_init = true;
    return reply_info;
}

export const intoNftComment = async (data) => {
    axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
        let res = await postNftComment(data);
        return res;
}

export const intoNftReply = async (data) => {
    axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
        let res = await postNftReply(data);
        return res;
}