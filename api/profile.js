import request from "./service";

export const initializeprofile = (network, address) => {
    return request({
        url: '/initialize_user_info?network=' + network + '&address=' + address,
        method: 'get',
    })
}

export const renew_email = (network, address, email) => {
    return request({
        url: '/renew_email?network=' + network + '&address=' + address + '&email=' + email,
        method: 'get',
    })
}

export const renew_nick_name = (network, address, nick_name) => {
    return request({
        url: '/renew_nick_name?network=' + network + '&address=' + address + '&nick_name=' + nick_name,
        method: 'get',
    })
}

export const renew_image = (network, address, image) => {
    return request({
        url: '/renew_image?network=' + network + '&address=' + address + '&image=' + image,
        method: 'get',
    })
}

export const renew_comment = (network, address, comment) => {
    return request({
        url: '/renew_comment?network=' + network + '&address=' + address + '&comment=' + comment,
        method: 'get',
    })
}

export const renew_liquidation_alert = (network, address, liquidation_alert) => {
    return request({
        url: '/renew_liquidation_alert?network=' + network + '&address=' + address + '&liquidation_alert=' + liquidation_alert,
        method: 'get',
    })
}

export const renew_hot_news = (network, address, hot_news) => {
    return request({
        url: '/renew_hot_news?network=' + network + '&address=' + address + '&hot_news=' + hot_news,
        method: 'get',
    })
}
