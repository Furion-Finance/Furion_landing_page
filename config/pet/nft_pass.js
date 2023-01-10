import {
    getFuCatNFTABI,
    getFuNFTPassABI,
    getAddress
} from "@/utils/common/contractABI";
import { getContract } from "@/utils/common";

export const PetInfo = {
    pass: {
        tier: 0,
        score: 0,
        discount: 0
    },
    cat: {
        balance: 0,
        token_score: 0,
        base_uri: '',
    },
    badge_list: [
        // contract balance score base_uri
    ],
    pass_address: '0x000000000000000000000000000000000000000',
    cat_address: '0x000000000000000000000000000000000000000',
    pass_contract: {},
    cat_contract: {},
}

export const InitPetInfo = async (petInfo, account) => {
    try {
        console.log('[Init Pet Info] Info ', petInfo);
        const addresses = getAddress();
        petInfo.cat_address = addresses['FuCatNFT'];
        petInfo.pass_address = addresses['FuNFTPass'];
        console.log('cat', petInfo.cat_address, 'pass', petInfo.pass_address);
        petInfo.cat_contract = await getContract(await getFuCatNFTABI(), petInfo.fucat_address);
        petInfo.pass_contract = await getContract(await getFuNFTPassABI(), petInfo.pass_address);

        const cat_balance = await petInfo.cat_contract.methods.balanceOf(account).call();
        console.log('cat balance', cat_balance);
        petInfo.cat.balance = cat_balance

    } catch (e) {
        console.warn(e);
    }
    return petInfo;
}