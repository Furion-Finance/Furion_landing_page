import request from "./service";

export const IP_ADDRESS = (address) => {
    return request({
        url: '/ip',
        method: 'get',
        params: {
            address
        }
    })
}