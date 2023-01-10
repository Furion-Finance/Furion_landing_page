import { getNftInfoByProject, getNftImages } from "@/api/nft_info";
import { getContract } from '@/utils/common';
import { getSeparatePoolABI, getSeparatePoolFactoryABI } from "@/utils/common/contractABI";

export const nft_item = {
    collection: 'Loading',
    address: '0x',
    token_id: 99,
    symbol: 'Furion',
    description: '',
    external_link: '',
    twitter_name: 'furion',
    twitter_link: 'https://twitter.com/furion',
    fXprice: 9.99,
    image: require("@/assets/images/placeholder.png"),
    lock_info: { locker: "0x0000000000000000000000000000000000000000", extended: false, release_time: 0 }
};

export const initNftItem = async (item, project, tokenId, network) => {
    let result = await getNftInfoByProject(project, network);
    let raw_data = result['data']['data'];

    const nft_image_request = await getNftImages(raw_data['address'], tokenId, network);
    const nft_image = nft_image_request['data']['data'][tokenId];

    item.collection = project;
    item.address = raw_data['address'];
    item.token_id = tokenId;
    item.symbol = raw_data['symbol'];
    item.description = raw_data['description'].split('\\')[0];
    item.external_link = raw_data['external_link'];
    item.twitter_name = raw_data['twitter_link'].split('/')[3];
    item.twitter_link = raw_data['twitter_link'];
    item.fXprice = raw_data['reference_price_high'];
    item.image = nft_image;

    const factoryContract = await getContract(await getSeparatePoolFactoryABI(), '');;
    const poolAddress = await factoryContract.methods.getPool(raw_data['address']).call();
    const poolContract = await getContract(await getSeparatePoolABI(), poolAddress);
    const lockInfo = await poolContract.methods.getLockInfo(tokenId).call();
    item.lock_info = {
        locker: lockInfo[0],
        extended: lockInfo[1],
        release_time: lockInfo[2]
    };
};
