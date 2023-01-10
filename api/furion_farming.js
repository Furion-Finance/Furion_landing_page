import request from "./service";


export const getTokenPrice = (token, network) => {
    return request ({
        url: '/token_farming',
        method: 'get',
        params: {
            token,
            network
        }
    })
}