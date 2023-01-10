import request from "./service";

// Get number of boxed a user has
export const getBox = (network, user) => {
    return request({
        url: '/get_box',
        method: 'get',
        params: {
            'network': network,
            'address': user
        }
    })
}

// Increase the number of boxes a user has by one
export const addBox = (network ,user) => {
    return request({
        url: '/add_box',
        method: 'post',
        params: {
            'network': network,
            'address': user
        }
    })
}

// Get task info of a user (task completion progress & whether the boxes are claimed)
export const getTask = (network, user) => {
    return request({
        url: '/get_task',
        method: 'get',
        params: {
            'network': network,
            'address': user
        }
    })
}

// Complete a task
export const completeTask = (network, user, task) => {
    return request({
        url: '/complete_task',
        method: 'post',
        params: {
            'network': network,
            'address': user,
            'task': task
        }
    })
}

// Claim the box for a specific task completed
export const claimBox = (network, user, task) => {
    return request({
        url: '/claim_box',
        method: 'post',
        params: {
            'network': network,
            'address': user,
            'task': task
        }
    })
}
