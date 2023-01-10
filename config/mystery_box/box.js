import {
    getBox,
    addBox,
    getTask,
    completeTask,
    claimBox
} from "@/api/mystery_box";

import { getCode, getReferred, getReferrer, useCode, addReferred } from "@/api/referral";

const network = 'goerli';

export const default_box_info = {
    box_num: 0,
    referred: 0,
    code: "",
    referrer: "",
    tasks: {
        store: {
            completed: false,
            claimed: false
        },
        buy: {
            completed: false,
            claimed: false
        },
        swap: {
            completed: false,
            claimed: false
        },
        share: {
            completed: false,
        }
    }
}

export const _getCode = async (address) => {
    const res = await getCode(network, address);
    return res['data']['data'][0][1];
}

export const _getReferred = async (address) => {
    const res = await getReferred(network, address);
    return res['data']['data'];
}

export const _addReferred = async (referred_address, referrer_address) => {
    const res = await addReferred(network, referred_address, referrer_address)
    return res['success'];
}

export const _getReferrer = async (referee) => {
    const res = await getReferrer(network, referee);
    return res['data']['data'];
}

export const _useCode = async (referee, code) => {
    const res = await useCode(network, referee, code);
    return res['data']['data'];
}

// read
export const getBoxNum = async (address) => {
    const boxInfo = await getBox(network, address);
    //console.log("boxInfo: ", boxInfo);
    return boxInfo['data']['data'][0][1]
}
// write
export const addBoxNum = async (address) => {
    const result = await addBox(network, address);
    //console.log("add box: ", result);
    return result['success'];
}
// read
export const getTaskInfo = async (address) => {
    const result = await getTask(network, address);
    //console.log("taskInfo: ", result);
    return result['data']['data'][0];
}

// Returns an array of length two that shows if task is completed and if box is claimed
export const getIndividualTask = async (address, task) => {
    const index = task == "store" ? 1 : (task == "buy") ? 2 : 3;
    const res = await getTask(network, address);
    return res['data']['data'][0][index];
}

// write
export const _completeTask = async (address, task) => {
    const result = await completeTask(network, address, task);
    console.log("complete task: ", result);
    return result['success'];
}
// write
export const _claimBox = async (address, task) => {
    console.log("claim called");
    const result = await claimBox(network, address, task);
    console.log("claim request: ", result);
    return result['success']
}

// Get number of completed tasks excluding twitter sharing
export const getCompletedTask = async (address) => {
    if (address == "" || address == undefined) {
        return 0;
    }

    let count = 0;

    const res = await getTaskInfo(address);

    for (let i = 1; i < 4; i++) {
        if (res[i][0]) {
            count++;
        }
    }

    return count;
}
// get user box number and task info
export const initBoxInfo = async (info, address) => {
    if (address == "" || address == undefined) {
        return;
    }

    info.box_num = await getBoxNum(address);
    info.code = await _getCode(address);
    info.referred = await _getReferred(address);
    info.referrer = await _getReferrer(address);

    let taskInfo = await getTaskInfo(address);
    info.tasks.store.completed = taskInfo[1][0];
    info.tasks.store.claimed = taskInfo[1][1];
    info.tasks.buy.completed = taskInfo[2][0];
    info.tasks.buy.claimed = taskInfo[2][1];
    info.tasks.swap.completed = taskInfo[3][0];
    info.tasks.swap.claimed = taskInfo[3][1];
    info.tasks.share.completed = taskInfo[4]
}

// Returns if a user gets a mystery box from claiming
export const boxRandom = async (address) => {
    let boxNum = await getBoxNum(address);
    const taskInfo = await getTaskInfo(address);

    // Box obtained from sharing is not counted
    if (taskInfo[4]) {
        boxNum--;
    }

    // Get number of tasks completed
    const tasksCompleted = await getCompletedTask(address);

    const num = Math.floor(Math.random() * 100);

    switch (tasksCompleted) {
        case 1:
            // Finished 1 tasks, get 1 box
            return num < 20 ? true : false;
        case 2:
            // Finished 2 tasks
            switch (boxNum) {
                case 0:
                    // Get 1 box
                    return num < 20 ? true : false;
                case 1:
                    // Get 2 boxes
                    return num < 4 ? true : false;
            }
        case 3:
            // Finished 3 tasks
            switch (boxNum) {
                case 0:
                    // Get 1 box
                    return true;
                case 1:
                    // Get 2 boxes
                    return num < 20 ? true : false;
                case 2:
                    // Get 3 boxes
                    return num < 4 ? true : false;
            }
    }
}