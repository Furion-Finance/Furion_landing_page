import { IP_ADDRESS } from "@/api/ip_checking";

export const initIP = async (address) => {
    let result = await IP_ADDRESS(address);
    let raw_data = result['data']['success'];
    return raw_data;
}