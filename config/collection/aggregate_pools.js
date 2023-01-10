import { fromUnit, trimDecimals, getContract, ipfsToHttp } from '@/utils/common';
import { query_abi } from "@/api/query_etherscan";
import { getAddress, getAggregatePoolABI, getFurionTokenABI, get721ABI } from "@/utils/common/contractABI";
import { getNftInfoByProject, getUri, getNftHoldingInfo } from "@/api/nft_info"; //getPoolInfoByName
import { getAggregatePools } from '@/utils/common/poolAddress';
import { newMultiCallProvider } from "@/utils/web3/multicall";
import uris from "@/assets/info/URIs.json";
import axios from "axios";

const multicall = newMultiCallProvider(5);

export const user_info_default = {
	fur_balance: 0,
	fft_balance: 0,
}

// Collection entry template
const collection = {
	id: 0,
	name: "Collection Name",
	symbol: "Symbol",
	address: "0x0",
	contract: {},
}

// NFT entry template
const nft = {
	token_id: 0,
	name: "Name",
	symbol: "Symbol",
	address: "0x0",
	contract: {},
	image_url: "",
	gateway: 1,
	lock_info: { 
		locker: "0x0000000000000000000000000000000000000000", 
		extended: false, 
		release_time: 0 
	}
}

export const NftPrices = {
	"BAYC": 50,
	"MAYC": 10,
	"Otherdeed": 1,
	"BAKC": 5,
	"CryptoPunks": 50,
	"Azuki": 10,
	"Doodles": 10,
	"Meebits": 5,
	"Weirdo Ghost Gang": 0.2,
	"Catddle": 0.05,
	"Mimic Shhans": 0.1
}

export const pool_info_default = {
	/*
	let collections = [];
	const name_list = ['Cool Cats', 'Cool Cats', 'Cool Cats', 'Cool Cats'];
	const symbol_list = ['COOL', 'COOL', 'COOL', 'COOL'];

	const separate_pools = getSeparatePools();
	for(let index=0; index<1; index++){
		try{
			collections.push({ id: index, name: name_list[index], symbol: symbol_list[index], image_url: require("@/assets/images/placeholder.png"), ftoken_address: separate_pools[''+index]['address'], contract: {}})
		}catch(e){
			collections.push({ id: index, name: name_list[index], symbol: symbol_list[index], image_url: require("@/assets/images/placeholder.png"), ftoken_address: '', contract: {}})
		}
		
	}
	*/
		name: 'Aggregate Pool',
		symbol: 'Symbol',
		address: '0x0',
		contract: {},
		avatar: require("@/assets/images/placeholder.png"),
		banner_url: require("@/assets/images/item.png"),
		items: 0,
		volume: 0,
		fft_price: 0,
		buy_fee: "100000000000000000000",
		lock_fee: "150000000000000000000",
		collections: [],
		in_pool: []
}


export const initPoolInfo = async (poolName) => {
	const network = 'goerli';
	let init = pool_info_default;

	const pools = getAggregatePools();
	for (let pool of pools) {
		if (pool.name == poolName) {
			// Init pool info
			init.name = pool.name;
			init.symbol = pool.symbol;
			init.avatar = require(`@/assets/images/aggregate_pool/${pool.avatar}.gif`);
			init.address = pool.address;
			init.contract = (await initAPoolContract(init.address)).contract;

			// Init collections
			init.collections = await initCollections(pool.collections);

			// Init volume, items
			const VOI = await getVolumeItem(init);
			init.volume = VOI.volume;
			init.items = VOI.items;
			init.fft_price = trimDecimals(fromUnit(await init.contract.methods.refPricePerFFT().call(), 18), 2);
			break;
		}
	}

	await getNftContract(init.collections);
	// Init in_pool
	init.in_pool = await getNftHolding(init.collections, init.address, true, init.contract);

	return init;
}

// Add collection info other than just name
const initCollections = async (names, network = 'goerli') => {
	let final = [];

	for (let i = 0; i < names.length; i++) {
				const name = names[i];
				const result = await getNftInfoByProject(name, network);

				let raw_data = result['data']['data'];
				if (raw_data['symbol'] == '⚇') {
					raw_data['symbol'] = 'Meebit';
				}

				if (raw_data['symbol'] == '(Ͼ)') {
					raw_data['symbol'] = 'PUNKS';
				}

				final.push({
					id: i,
					name: name,
					symbol: raw_data['symbol'],
					address: raw_data['address'],
				});
			}

	return final;
}

export const getVolumeItem = async (poolObject, network = 'goerli') => {
	let volume = 0;
	let items = 0;
	let staked = [];
	
	// pool object from index page
	if (poolObject.address == undefined) {
		// Get pool address
		let poolAddress;
		const pools = getAggregatePools();
		for (let pool of pools) {
			if (pool.name == poolObject.name) {
				poolAddress = pool.address;
				break;
			}
		}

		// Initialize collections for before calling getNftHoldingInfo
		let collections = [];
		for (let collection of poolObject.collections) {
			collections.push(collection.name);
		}
		collections = await initCollections(collections);
		for (let collection of collections) {
			console.time(`Get ${collection.name} holdings`);
			const raw_in_pool = collection.name == "CryptoPunks" ? await getPunksHolding(poolAddress) : (await getNftHoldingInfo(collection.address, poolAddress, network))['data']['data']; 
			console.timeEnd(`Get ${collection.name} holdings`);
			const amount = raw_in_pool.length;
			volume += (amount * NftPrices[collection.name]);
			items += amount;
			staked.push(amount);
		}
	} 
	// pool object with initialized collections from pool_info
	else {
		for (let collection of poolObject.collections) {
			const raw_in_pool = collection.name == "CryptoPunks" ? await getPunksHolding(poolObject.address, collection.contract) : (await getNftHoldingInfo(collection.address, poolObject.address, network))['data']['data']; 
			const amount = raw_in_pool.length;
			volume += (amount * NftPrices[collection.name]);
			items += amount;
			staked.push(raw_in_pool.length);
		}
	}

	return { volume: volume, items: items, staked: staked };
}

export const getNftContract = async (collections) => {
	for (let collection of collections) {
		let nft_contract;

		if (collection.name == "CryptoPunks") {
			const nft_abi_request = await query_abi(collection.address);
			const nft_abi = JSON.parse(nft_abi_request['data']['result']);
			nft_contract = await getContract(nft_abi, collection.address);
		} else {
			nft_contract = await getContract(await get721ABI(), collection.address);
		}

		collection.contract = nft_contract;
	}
}

export const getPunksHolding = async (user, punkContract = null) => {
	if (punkContract == null) {
		const addresses = getAddress();
		const nft_abi_request = await query_abi(addresses['CryptoPunks']);
		const nft_abi = JSON.parse(nft_abi_request['data']['result']);
		const nft_contract = await getContract(nft_abi, addresses['CryptoPunks']);
		punkContract = nft_contract;
	}

	const lastId = await punkContract.methods.nextPunkIndexToAssign().call();

	let multicall_list = [];
	for (let i = 0; i < lastId; i++) {
		multicall_list.push(punkContract.methods.punkIndexToAddress(i));
	}
	const results = await multicall.aggregate(multicall_list);

	let ids = [];

	for (let i = 0; i < results.length; i++) {
		if (results[i].toLowerCase() == user.toLowerCase()) {
			ids.push(i);
		}
	}

	return ids;
}

// Minimal collection object: { name, symbol, address }
export const getNftHolding = async (collections, user, checkLock, poolContract = {}, network = 'goerli') => {
	// 2-D array
	let ids = [];
	for (let collection of collections) {
		const raw_in_pool = collection.name == "CryptoPunks" ? await getPunksHolding(user, collection.contract) : (await getNftHoldingInfo(collection.address, user, network))['data']['data'];
		//console.log(`${collection.name}: `, raw_in_pool);
		ids.push(raw_in_pool);
	}

	let holdings = [];
	// Lock Info is only needed for NFTs in the pool, not needed when getting user balance
	if (checkLock) {
		holdings = await getNftInfo(collections, poolContract, ids);
	} else {
		for (let i = 0; i < ids.length; i++) {
			for (let id of ids[i]) {
				holdings.push({
					token_id: id,
		            name: collections[i].name,
		            symbol: collections[i].symbol,
		            address: collections[i].address,
		            contract: collections[i].contract,
		            image_url: require("@/assets/images/placeholder.png"),
		            gateway: 1,
		            show: false
				});
			}
		}
	}

	return holdings;
}

/*
export const _getNftHoldingInfo = async (collectionObject, owner) => {
	let multicall_list = [];
	const startIndex = (collectionObject.name == "Meebits" || "Catddle" || "Mimic Shhans") ? 1 : 0;

	for (let i = 0; i < 100; i++) {
		const actualIndex = i + startIndex;

		if (collectionObject.name == "CryptoPunks") {
			multicall_list.push(collectionObject.contract.methods.punkIndexToAddress(actualIndex));
		} else {
			multicall_list.push(collectionObject.contract.methods.ownerOf(actualIndex));
		}
	}
	const results = await multicall.aggregate(multicall_list);

	let ids = [];
	for (let i = 0; i < results.length; i++) {
		const actualIndex = i + startIndex;

		if (results[i].toLowerCase() == owner.toLowerCase()) {
			ids.push(actualIndex);
		}
	}

	return ids;
}
*/

export const getNftInfo = async (collections, poolContract, ids) => {
    let multicall_list = [];
    for (let i = 0; i < ids.length; i++) {
    	for (let id of ids[i]) {
	        multicall_list.push(poolContract.methods.getLockInfo(collections[i].address, id));
	    }
    }
    const results = await multicall.aggregate(multicall_list);

    let in_pool = [];
    let k = 0;
    for (let i = 0; i < ids.length; i++) {
    	for (let id of ids[i]) {
    		in_pool.push({
	            token_id: id,
	            name: collections[i].name,
	            symbol: collections[i].symbol,
	            address: collections[i].address,
	            contract: collections[i].contract,
	            image_url: require("@/assets/images/placeholder.png"),
	            gateway: 1,
	            show: false,
	            lock_info: {
	                locker: results[k][0],
	                extended: results[k][1],
	                release_time: results[k][2]
	            },
	        });
	        k++;
    	}
    }

    return in_pool;
}

export const convertId = (id, start, supply) => {
	return (id - start) % supply + start;
}

export const punkImgCode = (id) => {
	id = String(convertId(id, 0, 10000));

	if (id.length > 4) {
		let temp= "";
		for (let i = id.length - 4; i < id.length; i++) {
			temp += id[i];
		}
		return temp;
	}
	
	let final = "";

	for (let i = 0; i < 4 - id.length; i++) {
		final += "0";
	}

	final += id;

	return final;
}
 
// Minimal NFT object: { name, contract (optional), token_id, image_url }	
// Provide NFT contract if initialize image of single collection
export const initTokenImage = async (nfts, contract = null) => {
	if (nfts.length < 1) {
		console.log("No NFT images to initialize");
		return;
	}

	let indicesToReload = [];

	for (let i = 0; i < nfts.length; i++) {
		// Image URL already retrieved before
		if (nfts[i].image_url[0] == 'h') {
			continue;
		}

		try {
			//console.log("Making " + nfts[i].name + " #" + nfts[i].token_id + " request");

			if (uris["actual"][nfts[i].name] == undefined) {
				const res = await getUri(uris["base"][nfts[i].name]+nfts[i].token_id);
		      
			    // console.log(i, 'get updated succesfully')
			    // console.log('URI specific info', res.data)
			    let raw_image_url = res.data.image;
			    nfts[i].image_url = ipfsToHttp(raw_image_url);
			    //console.log(nfts[i].image_url);
			} else {
				const uri = uris["actual"][nfts[i].name];
				const id = nfts[i].name == "CryptoPunks" ? punkImgCode(nfts[i].token_id) : convertId(nfts[i].token_id, uri.start, uri.end);
				nfts[i].image_url = uri.first + id + uri.second;
			}
			/*
			if (nfts[i].name == "CryptoPunks") {
				nfts[i].image_url = "https://cryptopunks.app/public/images/cryptopunks/punk"+punkImgCode(nfts[i].token_id)+".png";
			} else if (nfts[i].name == "Mimic Shhans") {
				nfts[i].image_url = "https://img.x2y2.io/v2/1/0xf75fd01d2262b07d92dca7f19bd6a3457060d7db/"+convertId(nfts[i].token_id, 1, 10012)+"/720/image.jpg";
			} else {
				const res = await getUri(results[i]);
		      
			    // console.log(i, 'get updated succesfully')
			    // console.log('URI specific info', res.data)
			    let raw_image_url = res.data.image;
			    nfts[i].image_url = raw_image_url[0] == 'i' ? ipfsToHttp(raw_image_url) : raw_image_url;
			    console.log(nfts[i].image_url);
			}
			*/
	   	} catch (e) {
	   		try {
	   			console.log("Back-end request failed, use axios request");
	   			const res = await axios.get(uris["base"][nfts[i].name]+nfts[i].token_id);
	   			nfts[i].image_url = ipfsToHttp(res.data.image);
	   		} catch (e) {
	   			console.log("Axios request also failed, use placeholder");
	   			indicesToReload.push(i);
		   		nfts[i].image_url = require("@/assets/images/placeholder.png");
		   		console.log("Retrieve image failed");
		   		console.log(e);
	   		}
	    }
	}

	return indicesToReload;
}

export const _changeGateway = (nft) => {
	if (!(nft.image_url.includes("ipfs"))) {
		const original = nft.image_url;
		nft.image_url = require("@/assets/images/placeholder.png");
		nft.image_url = original;
		return;
	}

	nft.gateway = nft.gateway == 6 ? 1 : nft.gateway + 1;
	const hash = nft.image_url.slice(nft.image_url.length - 46);
	nft.image_url = ipfsToHttp("i....." + hash, nft.gateway);
	console.log(`${nft.name} #${nft.token_id} new gateway: ${nft.image_url}`);
}

export const reloadImage = async (nfts, indices) => {
	console.log("Reloading image");
	if (nfts.length == 0) {
		console.log("No NFT images to reload");
		return;
	}

	let multicall_list = [];

	for (let index of indices) {
		multicall_list.push((nfts[index].contract).methods.tokenURI(nfts[index].token_id));
	}
	const results = await multicall.aggregate(multicall_list);
	let indicesToReload = [];

	for (let i = 0; i < results.length; i++) {
		try {
			if (uris["actual"][nfts[i].name] == undefined) {
				const res = await getUri(uris["base"][nfts[i].name]+nfts[i].token_id);
		      
			    // console.log(i, 'get updated succesfully')
			    // console.log('URI specific info', res.data)
			    let raw_image_url = res.data.image;
			    nfts[i].image_url = raw_image_url[0] == 'i' ? ipfsToHttp(raw_image_url) : raw_image_url;
			    console.log(nfts[i].image_url);
			} else {
				const uri = uris["actual"][nfts[i].name];
				const id = nfts[i].name == "CryptoPunks" ? punkImgCode(nfts[i].token_id) : convertId(nfts[i].token_id, uri.start, uri.end);
				nfts[i].image_url = uri.first + id + uri.second;
			}
	   	} catch (e) {
	   		indicesToReload.push(indices[i]);
	   		nfts[indices[i]].image_url = require("@/assets/images/placeholder.png");
	   		console.log("Reload image failed");
	    }
	}

	return indicesToReload;
}

export const initAPoolContract = async (poolAddress) => {
	let aggregate_pool_contract = {};
	const poolContract = await getContract(await getAggregatePoolABI(), poolAddress);
	aggregate_pool_contract.address = poolAddress;
    aggregate_pool_contract.contract = poolContract;

    return aggregate_pool_contract;
}

export const initFurContract = async () => {
    let fur_contract = {};
    const furABI = await getFurionTokenABI();
    fur_contract.address = furABI.address;
    fur_contract.contract = await getContract(furABI, '');

    return fur_contract;
}

export const initAvatars = async (list, network) => {
	for (let item of list) {
		for (let collection of item.collections) {
			const result = await getNftInfoByProject(collection.name, network);
    		const raw_data = result['data']['data'];

			collection.avatar = raw_data['image_url'];
			console.log(collection.name, raw_data['image_url']);
		}
	}
}