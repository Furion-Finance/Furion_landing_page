import { getNftDash, data_into_testnet, data_into_remain, furion_data_testnet } from "@/api/furion_dash";

export const initNftDash = async (network) => {
  let dash_info = { dash_init: false, dash_list: [] };
  let result = await getNftDash(network);
  let raw_data = result["data"]["data"];

  let temp = {
    furion_market_caps_24h: raw_data[0],
    furion_market_caps_1w: raw_data[1],
    furion_market_caps_1m: raw_data[2],
    nfts: raw_data[3],
    locked: raw_data[4],
    stored: raw_data[5],
    sep_no: raw_data[6],
    sep_tvl: raw_data[7],
    agg_no: raw_data[8],
    agg_tvl: raw_data[9],
    swap_tvl_24h: raw_data[10],
    swap_tvl_1w: raw_data[11],
    swap_tvl_1m: raw_data[12],
    swap_volumn_24h: raw_data[13],
    swap_volumn_1w: raw_data[14],
    swap_volumn_1m: raw_data[15],
    time_list_24h: raw_data[16],
    time_list_1w: raw_data[17],
    time_list_1m: raw_data[18],
    end_time: raw_data[19],
  };

  // console.log(final_result)
  dash_info.dash_list = temp;
  dash_info.dash_init = true;
  return dash_info;
};

export const into_testnet = async (network='goerli', project, operation) => {
  let result = await data_into_testnet(network, project, operation);
  return;
};

export const into_remain = async (network='goerli', name, number_1=0, number_2=0) => {
  let result = await data_into_remain(network, name, number_1, number_2);
  let raw_data = result["data"]["data"];
  return;
};

export const initFurionTest = async () => {
  let dash_info = { dash_init: false, dash_list: [] };
  let result = await furion_data_testnet();
  let raw_data = result["data"]["data"];

  let temp = {
    no_address: raw_data[0][1],
    no_address_store: raw_data[0][1],
    no_address_buy: raw_data[0][2],
    no_address_swap: raw_data[0][3],
    no_address_zero: raw_data[0][4],
    no_address_all: raw_data[0][5],
    no_sharing: raw_data[0][6],
    no_mystery: raw_data[0][7],
    no_try: raw_data[0][8],
    no_try_no_luck: raw_data[0][9]
  };

  // console.log(final_result)
  dash_info.dash_list = temp;
  dash_info.dash_init = true;
  return dash_info;
};