import { getNftInfoByProject, getNftImages, getNftHoldingInfo, getUri } from "@/api/nft_info";
import { getNftContract, getPunksHolding, punkImgCode, convertId } from '@/config/collection/aggregate_pools';
import { ipfsToHttp } from '@/utils/common';
import { newMultiCallProvider } from "@/utils/web3/multicall";
import uris from "@/assets/info/URIs.json";

const multicall = newMultiCallProvider(5);

export const getNftHolding = async (collections, user, checkLock = false, poolContract = {}, network = 'goerli') => {
	await getNftContract(collections);

	// 2-D array
	let ids = [];
	for (let collection of collections) {
		console.log(`${collection.name}: ${collection.address}`);
		const raw_in_pool = collection.name == "CryptoPunks" ? await getPunksHolding(user, collection.contract) : (await getNftHoldingInfo(collection.address, user, network))['data']['data'];
		console.log(`${collection.name}: `, raw_in_pool)
		ids.push(raw_in_pool);
	}

	let holdings = [];
	// Lock Info is only needed for NFTs in the pool, not needed when getting user balance
	/*
	if (checkLock) {
		holdings = await getNftInfo(collections, poolContract, ids);
	} else {
	*/
		for (let i = 0; i < ids.length; i++) {
			for (let id of ids[i]) {
				holdings.push({
					token_id: id,
		            name: collections[i].name,
		            symbol: collections[i].symbol,
		            contract: collections[i].contract,
		            image_url: require("@/assets/images/placeholder.png"),
				});
			}
		}
	//}

	return holdings;
}

export const initTokenImage = async (nfts, contract = null) => {
	console.log(nfts);
	if (nfts.length < 1) {
		console.log("No NFT images to initialize");
		return;
	}

	let multicall_list = [];

	if (contract == null) {
		for (let nft of nfts) {
			if (nft.name == "CryptoPunks") {
				multicall_list.push(nft.contract.methods.imageHash());
			} else {
				multicall_list.push(nft.contract.methods.tokenURI(nft.token_id));
			}
		}
	} else {
	    for (let nft of nfts) {
	        multicall_list.push(contract.methods.tokenURI(nft.token_id));
	    }
	}
	const results = await multicall.aggregate(multicall_list);
	let indicesToReload = [];

	for (let i = 0; i < results.length; i++) {
		try {
			if (uris[nfts[i].name] == undefined) {
				const res = await getUri(results[i]);
		      
			    // console.log(i, 'get updated succesfully')
			    // console.log('URI specific info', res.data)
			    let raw_image_url = res.data.image;
			    nfts[i].image_url = raw_image_url[0] == 'i' ? ipfsToHttp(raw_image_url) : raw_image_url;
			    console.log(nfts[i].image_url);
			} else {
				const uri = uris[nfts[i].name];
				const id = nfts[i].name == "CryptoPunks" ? punkImgCode(nfts[i].token_id) : convertId(nfts[i].token_id, uri.start, uri.end);
				nfts[i].image_url = uri.first + id + uri.second;
			}
	   	} catch (e) {
	   		indicesToReload.push(i);
	   		nfts[i].image_url = require("@/assets/images/placeholder.png");
	   		console.log("Retrieve image failed");
	   		console.log(e);
	    }
	}

	return indicesToReload;
}