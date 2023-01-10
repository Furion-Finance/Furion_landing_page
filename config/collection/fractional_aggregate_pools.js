import { getContract, ipfsToHttp } from '@/utils/common';
import { getSeparatePoolABI, getAggregatePoolABI, getFurionTokenABI } from "@/utils/common/contractABI";
import { getNftInfoByProject } from "@/api/nft_info"; //getPoolInfoByName

import { getSeparatePools, getAggregatePools } from '@/utils/common/poolAddress';

export const user_info_default = {
	fur_balance: 0,
	fft_balance: 0,
	ftoken_balance: [],
}

export const pool_info_default = ()=> {
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
	return {
		name: 'Cool Cats',
		id: 1,
		address: getAggregatePools()['0']['address'],
		in_pool: [],
		stake_fee: 0,
		unstake_fee: 0,
		symbol: 'MIX',
		avatar: require("@/assets/images/merged.gif"),
		banner_url: require("@/assets/images/item.png"),
		description: '',
		volume: 9999,
		owners: 999,
		fft_price: 9.99,
		collections: collections
	};
}


export const initPoolInfo = async (poolName) => {
	const init = pool_info_default();

	for (let collection of init.collections) {
		const result = await getNftInfoByProject(collection.name, 'goerli');
    	const raw_data = result['data']['data'];

		collection.image_url = raw_data['image_url'];
		collection.contract = await initSPoolContract(collection.ftoken_address);
	}
	
	/*
	const result = await getPoolInfoByName(poolName);
	const raw_data = result["data"]["data"];

	init.name = poolName;
	init.id = raw_data["id"];
	init.address = raw_data["address"];
	init.symbol = raw_data["symbol"];
	init.avatar = raw_data["avatar"];
	init.banner_url = raw_data["banner_url"];
	init.description = raw_data["description"];
	init.volume = raw_data["volume"];
	init.owners = raw_data["owners"];
	init.fft_price = raw_data["fft_price"];
	init.collections = raw_data["collections"];

	for (let collection of init.collections) {
		collection.contract = initSPoolContract(colelction.ftoken_address);
	}
	*/

	return init;
}

export const initSPoolContract = async (poolAddress) => {
	return await getContract(await getSeparatePoolABI(), poolAddress);
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