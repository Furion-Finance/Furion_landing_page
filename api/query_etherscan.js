import { service_etherscan } from "./service"

export const query_abi = (address) => {
    return service_etherscan({
        url: '/',
        method: 'get',
        params: {
            module: 'contract',
            action: 'getabi',
            address: address,
            apikey: 'UCJ24GP9ICCR28QNPDNCXZ27VHWIG442F6'
        }
    })
}