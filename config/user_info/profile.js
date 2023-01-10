import { initializeprofile, renew_email, renew_nick_name, renew_image, renew_comment, renew_liquidation_alert, renew_hot_news  } from "@/api/profile";

export const connect_info = {
    address: ''
}

export const user_info = {
    init: false,
    info_list:
        {
            'id': 99,
            'address': '',
            'nick_name': 'anonymous',
            'email': '123@furion.com',
            'image': 'image',
            'comment': true,
            'liquidation_alert': true,
            'hot_news': true,
            'created_time': 'now',
        }
};

export const inituserinfo = async (network,address) => {
    let user_info = { init: false, info_list: [] };
    let result = await initializeprofile(network,address);
    let raw_data = result['data']['data'];

    let temp = {
        id: raw_data[0][0],
        address: address,
        nick_name: raw_data[0][2],
        email: raw_data[0][3],
        image: raw_data[0][4],
        comment: raw_data[0][5],
        liquidation_alert: raw_data[0][6],
        hot_news: raw_data[0][7],
        created_time: raw_data[0][8].substring(0,10),
    };

    // console.log(final_result)
    user_info.info_list = temp;
    user_info.init = true;
    return user_info;
}

export const renew_user_email = async (network,address,email) => {
    let user_info = { init: false, info_list: [] };
    let result = await renew_email(network,address,email);
    let raw_data = result['data']['data'];

    let temp = {
        id: raw_data[0][0],
        address: address,
        nick_name: raw_data[0][2],
        email: raw_data[0][3],
        image: raw_data[0][4],
        comment: raw_data[0][5],
        liquidation_alert: raw_data[0][6],
        hot_news: raw_data[0][7],
        created_time: raw_data[0][8].substring(0,10),
    };

    // console.log(final_result)
    user_info.info_list = temp;
    user_info.init = true;
    return user_info;
}

export const renew_user_nick_name = async (network,address,nick_name) => {
    let user_info = { init: false, info_list: [] };
    let result = await renew_nick_name(network,address,nick_name);
    let raw_data = result['data']['data'];

    let temp = {
        id: raw_data[0][0],
        address: address,
        nick_name: raw_data[0][2],
        email: raw_data[0][3],
        image: raw_data[0][4],
        comment: raw_data[0][5],
        liquidation_alert: raw_data[0][6],
        hot_news: raw_data[0][7],
        created_time: raw_data[0][8].substring(0,10),
    };

    // console.log(final_result)
    user_info.info_list = temp;
    user_info.init = true;
    return user_info;
}

export const renew_user_image = async (network,address,image) => {
    let user_info = { init: false, info_list: [] };
    let result = await renew_image(network,address,image);
    let raw_data = result['data']['data'];

    let temp = {
        id: raw_data[0][0],
        address: address,
        nick_name: raw_data[0][2],
        email: raw_data[0][3],
        image: raw_data[0][4],
        comment: raw_data[0][5],
        liquidation_alert: raw_data[0][6],
        hot_news: raw_data[0][7],
        created_time: raw_data[0][8].substring(0,10),
    };

    // console.log(final_result)
    user_info.info_list = temp;
    user_info.init = true;
    return user_info;
}

export const renew_user_comment = async (network,address,comment) => {
    let user_info = { init: false, info_list: [] };
    let result = await renew_comment(network,address,comment);
    let raw_data = result['data']['data'];

    let temp = {
        id: raw_data[0][0],
        address: address,
        nick_name: raw_data[0][2],
        email: raw_data[0][3],
        image: raw_data[0][4],
        comment: raw_data[0][5],
        liquidation_alert: raw_data[0][6],
        hot_news: raw_data[0][7],
        created_time: raw_data[0][8].substring(0,10),
    };

    // console.log(final_result)
    user_info.info_list = temp;
    user_info.init = true;
    return user_info;
}

export const renew_user_liquidation_alert= async (network,address,liquidation_alert) => {
    let user_info = { init: false, info_list: [] };
    let result = await renew_liquidation_alert(network,address,liquidation_alert);
    let raw_data = result['data']['data'];

    let temp = {
        id: raw_data[0][0],
        address: address,
        nick_name: raw_data[0][2],
        email: raw_data[0][3],
        image: raw_data[0][4],
        comment: raw_data[0][5],
        liquidation_alert: raw_data[0][6],
        hot_news: raw_data[0][7],
        created_time: raw_data[0][8].substring(0,10),
    };

    // console.log(final_result)
    user_info.info_list = temp;
    user_info.init = true;
    return user_info;
}

export const renew_user_hot_news= async (network,address,hot_news) => {
    let user_info = { init: false, info_list: [] };
    let result = await renew_hot_news(network,address,hot_news);
    let raw_data = result['data']['data'];

    let temp = {
        id: raw_data[0][0],
        address: address,
        nick_name: raw_data[0][2],
        email: raw_data[0][3],
        image: raw_data[0][4],
        comment: raw_data[0][5],
        liquidation_alert: raw_data[0][6],
        hot_news: raw_data[0][7],
        created_time: raw_data[0][8].substring(0,10),
    };

    // console.log(final_result)
    user_info.info_list = temp;
    user_info.init = true;
    return user_info;
}

