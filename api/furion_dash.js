import request from "./service";

export const getNftDash = (network) => {
    return request({
        url: '/furion_dash',
        method: 'get',
        params:{
            network
        }
    })
}

export const data_into_testnet = (network, project, operation) => {
    return request({
        url: '/data_into_testnet',
        method: 'get',
        params:{
            network,
            project,
            operation
        }
    })
}

export const data_into_remain = (network, name, number_1, number_2) => {
    return request ({
        url: '/data_into_remain',
        method: 'get',
        params: {
            network,
            name,
            number_1,
            number_2
        }
    })
}

export const furion_data_testnet = () => {
    return request ({
        url: '/furion_data_testnet',
        method: 'get'
    })
}