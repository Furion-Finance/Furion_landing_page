import request from "./service";

export const getNftInfo = (network) => {
    return request({
        url: '/nft_info',
        method: 'get',
        params: {
            'network': network
        }
    })
}

export const getNftInfoByProject = (project, network) => {
    return request({
        url: '/nft_intro_by_project',
        method: 'get',
        params: {
            'project': project,
            'network': network
        }
    })
}

export const getNftInfoByAddress = (address, network) => {
    return request({
        url: '/nft_info_by_address',
        method: 'get',
        params: {
            'address': address,
            'network': network
        }
    })
}

export const getNftInfoRanking = (network) => {
    return request({
        url: '/nft_info_ranking',
        method: 'get',
        params: {
            'network': network
        }
    })
}

export const getNftImages = (address, token_id_str, network) => {
    return request({
        url: '/nft_images',
        method: 'get',
        params: {
            'address': address,
            'token_id_str': token_id_str,
            'network': network
        }
    })
}

export const getUri = (uri) => {
    return request({
        url: '/help_get',
        method: 'get',
        params:{
            'url': uri
        }
    })
}

export const getNftWeekPrice = (address, network) => {
    return request({
        url: '/nft_week_price',
        method: 'get',
        params:{
            address, network
        }
    })
}

export const getNftHoldingInfo = (nft_address, owner, network) => {
    return request({
        url: '/nft_holding_info',
        method: 'get',
        params:{
            nft_address, owner, network
        }
    })
}
