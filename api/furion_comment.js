import request from "./service";

export const getNftComment = (network, nft_address, token_id) => {
    return request({
        url: '/furion_comment',
        method: 'get',
        params:{
            network, nft_address, token_id
        }
    })
}

export const getNftReply = (network, comment_id) => {
    return request({
        url: '/furion_reply',
        method: 'get',
        params:{
            network, comment_id
        }
    })
}

export const postNftComment = (data) => {
    return request({
        url: "/into_comment",
        method: "post",
        params: data,
      });
}

export const postNftReply = (data) => {
    return request({
        url: "/into_reply",
        method: "post",
        params: data,
      });
}
