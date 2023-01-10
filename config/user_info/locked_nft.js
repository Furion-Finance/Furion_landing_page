import { getNftHoldingInfo, getUri } from "@/api/nft_info";
import { query_abi } from "@/api/query_etherscan";
import { getContract } from '@/utils/common';
import { getSeparatePoolABI, getSeparatePoolFactoryABI } from "@/utils/common/contractABI";

export const query_user_locked = async (nft_address, user_address, network) => {
    const factoryContract = await getContract(await getSeparatePoolFactoryABI(), '');
    const poolAddress = await factoryContract.methods.getPool(nft_address).call();
    const poolContract = await getContract(await getSeparatePoolABI(), poolAddress);
    let raw_in_pool = (await getNftHoldingInfo(nft_address, poolAddress.toLowerCase(), network))['data']['data'];

    if (raw_in_pool.length < 1) {
        return []
    }

    let locked = [];
    for (let j = 0; j < raw_in_pool.length; j++) {
        const id = raw_in_pool[j];
        const lockInfo = await poolContract.methods.getLockInfo(id).call();
        
        if (lockInfo[0].toLowerCase() == user_address) {
            let single_record = {
                token_id: id,
                image_url: require("@/assets/images/placeholder.png"),
                lock_info: {
                    locker: lockInfo[0],
                    extended: lockInfo[1],
                    release_time: lockInfo[2]
                },
            }
            locked.push(single_record);
        }
    }

    const nft_abi_request = await query_abi(nft_address);
    const nft_abi = JSON.parse(nft_abi_request['data']['result']);

    let nft_contract = await getContract(nft_abi, nft_address);

    for (let i = 0; i < locked.length; i++) {
        let temp_uri = await nft_contract.methods.tokenURI(locked[i].token_id).call();

        let result = await getUri(temp_uri);
        let raw_image_url = result.data.image;
        locked[i].image_url = raw_image_url[0] == 'i' ? ipfsToHttp(raw_image_url) : raw_image_url;
    }

    return locked;
}