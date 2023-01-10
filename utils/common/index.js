import Web3 from "web3";

import { WEB3 } from "../web3";

import ERC20ABI from "~/assets/abis/MockUSD.json";

export const ALLOWANCE_THRESHOLD = 1000000;

export const ipfsToHttp = (url, type = 1) => {
  if (url[0] != 'i') {
    return url;
  }

  switch (type) {
    case 1: 
      return "https://gateway.ipfs.io/ipfs/" + url.substr(6);
    case 2: 
      return "https://cloudflare-ipfs.com/ipfs/" + url.substr(6);
    case 3:
      return "https://ipfs.io/ipfs/" + url.substr(6);
    case 4:
      return "https://gateway.pinata.cloud/ipfs/" + url.substr(6);
    case 5: 
      return "https://ipfs.4everland.io/ipfs/" + url.substr(6);
    case 6: 
      return "https://ipfs.fleek.co/ipfs/" + url.substr(6);
  }
};

export const getDecimals = (Decimals) => {
  switch (Decimals) {
    case 0:
      return "noether";
    case 1:
      return "wei";
    case 3:
      return "kwei";
    case 6:
      return "mwei";
    case 9:
      return "gwei";
    case 12:
      return "microether";
    case 15:
      return "milliether";
    case 18:
      return "ether";
    case 21:
      return "kether";
    case 24:
      return "mether";
    case 27:
      return "gether";
    case 30:
      return "tether";
    default:
      return Decimals;
  }
};

export const toBN = (FixNumber) => {
  return Web3.utils.toBN(FixNumber.toString());
};

export const getMaxNum = () => {
  return Web3.utils.toBN(
    "115792089237316195423570985008687907853269984665640564039457584007913129639935"
  );
};

export const fromWei = (FixNumber, Decimals) => {
  let FixDecimals = getDecimals(Decimals || 18);
  if (typeof FixNumber === "number") {
    const result = FixNumber / 10 ** (Decimals || 18);
    if (result.toFixed(8) - 1e-8 < 0) {
      return 0;
    }
    return result.toFixed(8);
  } else {
    const result = Number(Web3.utils.fromWei(FixNumber, FixDecimals));
    if (result.toFixed(8) - 1e-8 < 0) {
      return 0;
    }
    return result.toFixed(8);
  }
};
// Takes STRING as input, returns STRING
export const fromUnit = (FixNumber, Decimals) => {
  if (Decimals == 0) {
    return FixNumber;
  }

  let FixDecimals = getDecimals(Decimals || 18);

  return Web3.utils.fromWei(FixNumber, FixDecimals);
};

// Takes STRING, returns STRING
// Trim float to certain decimals without rounding (1.12345 -> 1.12)
// Trimming zeros as well, if any are created
export const trimDecimals = (num, decimals) => {
  let unit = "";
  if (num[num.length - 1] == "K" || num[num.length - 1] == "M" || num[num.length - 1] == "B" || num[num.length - 1] == "T") {
    unit = num[num.length - 1];
  }

  if (num == "0") {
    return num;
  }

  let temp = num.split(".");
  if (temp.length > 1 && unit) {
    temp[1] = temp[1].slice(0, temp[1].length - 1);
  }

  // No need to trim
  if (temp.length == 1 || temp[1].length <= decimals) {
    return num + unit;
  }

  return String(toFloor(temp[0] + "." + temp[1], decimals)) + unit;

  /*
  let sliced = temp[1].slice(0, decimals);
  const initialLength = sliced.length;

  for (let i = initialLength; i > 0; i--) {
    if (sliced[i - 1] > 0) {
      if (i == initialLength) {
        break;
      }
    } else {
      sliced = sliced.slice(0, sliced.length - 1);
    }
  }

  return sliced.length == 0 ? temp[0] + unit : temp[0] + "." + sliced + unit;
  */
};

export const valueUnits = (num) => {
  const splitted = num.split(".");
  let result = splitted[1] ? splitted[0] + "." : splitted[0];

  let unit = "";
  if (splitted[0].length > 4) {
    let slicePoint = splitted[0].length - 3;
    result = splitted[0].slice(0, slicePoint) + "." + splitted[0].slice(slicePoint, splitted[0].length);
    unit = "K";
  }

  if (splitted[0].length > 6) {
    let slicePoint = splitted[0].length - 6;
    result = splitted[0].slice(0, slicePoint) + "." + splitted[0].slice(slicePoint, splitted[0].length);
    unit = "M";
  }

  if (splitted[0].length > 9) {
    let slicePoint = splitted[0].length - 9;
    result = splitted[0].slice(0, slicePoint) + "." + splitted[0].slice(slicePoint, splitted[0].length);
    unit = "B";
  }

  if (splitted[0].length > 12) {
    let slicePoint = splitted[0].length - 12;
    result = splitted[0].slice(0, slicePoint) + "." + splitted[0].slice(slicePoint, splitted[0].length);
    unit = "T";
  }

  return splitted[1] ? result + splitted[1] + unit : result + unit;
};

export const toWei = (FixNumber, Decimals = 18) => {
  try {
    let FixDecimals = getDecimals(Decimals);
    if (typeof FixNumber === "number") {
      return Web3.utils.toWei(FixNumber.toFixed(Decimals), FixDecimals);
    } else {
      return Web3.utils.toWei(FixNumber, FixDecimals);
    }
  } catch(err) {
    console.warn(err);
  }
};

export const toFloor = (FixNumber, Decimals) => {
  return Math.floor(FixNumber * 10 ** Decimals) / 10 ** Decimals;
};

export const getContract = async (abi, address) => {
  const web3 = await WEB3();
  if (address === "") {
    try {
      return new web3.eth.Contract(abi.abi, abi.address);
    } catch (e) {
      return new web3.eth.Contract(abi, abi.address);
    }
  }

  try {
    return new web3.eth.Contract(abi.abi, address);
  } catch (e) {
    return new web3.eth.Contract(abi, address);
  }
};

export const tokenBalance = async (tokenAddress, account) => {
  const Contracts = await getContract(ERC20ABI, tokenAddress);

  return Contracts.methods
    .balanceOf(account)
    .call()
    .then((res) => {
      let Balance = fromWei(res, 18);
      return Balance;
    });
};

export const tokenAllowanceCheck = async (
  tokenAddress,
  fromAccount,
  toAccount
) => {
  const Contracts = await getContract(ERC20ABI, tokenAddress);
  return Contracts.methods
    .allowance(fromAccount, toAccount)
    .call()
    .then((res) => {
      let allowance = fromWei(res, 18);
      if (allowance < 100000000) {
        return false;
      }
      return true;
    });
};

export const tokenApprove = async (tokenAddress, fromAccount, toAccount) => {
  const tokenContract = await getContract(ERC20ABI, tokenAddress);
  //todo 1. 不知道这个函数调用的approve、send、on方法的作用是什么
  //2. abi文件里面不是一般都会有合约可以被调用的方法吗，我怎么知道tokenContract里面可以调用的方法有哪些呢
  // 3.在furion这个repo里面，tokenContract是对应tokenBase.sol吗 我在里面找不到approve方法
  await tokenContract.methods
    .approve(
      toAccount,
      //Web3.utils.toBN 将任何给定值安全转换为一个 BN.js 实例, 以便于在 JavaScript 中处理大数.
      Web3.utils.toBN(
        "115792089237316195423570985008687907853269984665640564039457584007913129639935"
      )
    )
    .send({ from: fromAccount })
    .on("transactionHash", (hash) => {
      console.log("Tx", hash);
    })
    .on("receipt", (receipt) => {
      // console.log('Receipt', receipt);
      return receipt;
    })
    .on("error", (error) => {
      console.log("Error", error);
    });
  return true;
};

export const getNativeTokenSymbol = (chainId) => {
  switch (chainId) {
    case 1:
      return "ETH";
    case 4:
      return "ETH";
    case 43113:
      return "AVAX";
    case 43114:
      return "AVAX";
    default:
      return "ETH";
  }
};

export const getNativeTokenAmount = async (account) => {
  const web3 = await WEB3();

  // console.log('getting native bal');
  // console.log('current provider', web3);

  const balance = await web3.eth.getBalance(account);
  console.log("native balnce", Number(fromWei(balance)));
  return Number(fromWei(balance));
};

export const getNativeTokenAmountRaw = async (account) => {
  const web3 = await WEB3();
  
  return await web3.eth.getBalance(account);
};

export const getTxURL_test = (transactionHash) => {
  const url = '"https://etherscan.io/tx/' + transactionHash;
  // console.log(url1);
  const txURL =
    "<a href=" +
    url +
    '"' +
    ' style="color: blue" target="blank">View on Explorer</a>';
  // console.log(txURL);
  return txURL;
};

export const getAddressURL_test = (address) => {
  const url = '"https://testnet.etherscan.io/address/' + address;
  // console.log(url1);
  const txURL =
    "<a href=" +
    url +
    '"' +
    ' style="color: blue" target="blank">View on Explorer</a>';
  // console.log(txURL);
  return txURL;
};

export const getTxURL = (transactionHash) => {
  const url = '"https://goerli.etherscan.io/tx/' + transactionHash;
  // console.log(url1);
  const txURL =
    "<a href=" +
    url +
    '"' +
    ' style="color: blue" target="blank">View on Explorer</a>';
  // console.log(txURL);
  return txURL;
};

export const getAddressURL = (address) => {
  const url = '"https://etherscan.io/address/' + address;
  // console.log(url1);
  const txURL =
    "<a href=" +
    url +
    '"' +
    ' style="color: blue" target="blank">View on Explorer</a>';
  // console.log(txURL);
  return txURL;
};

export const getNow = () => {
  const time = new Date().getTime();
  const now = Math.floor(time / 1000);
  return now;
};

export const formatTime = (value) => {
  if (typeof value == "string") {
    return value.replace("T", " ").split(".")[0];
  } else {
    return value;
  }
};

export const _compareInt = (a, b) => {
  if (a.length > b. length) {
    return "larger";
  }
  if (a.length < b.length) {
    return "smaller";
  }
    
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      return "larger";
    }
    if (a[i] < b[i]) {
      return "smaller";
    }
  }
    
  return "equal";
};

export const _formatNumber = (value) => {
  if (value == undefined) {
    return "--";
  }
  if (typeof value == "number") {
    return value.toLocaleString("en-US");
  }
  if (typeof value == "string") {
    if (value === "--") {
      return "--";
    }
    return Number(value).toLocaleString("en-US");
  }
  return value;
};

export const formatNumber = (value, fixed = 2) => {
  // If value is negative or NaN, then return -- 
  if (value < 0 || isNaN(value)) {
    final_result = '--';
  }
  // convert value to local string
  value = value.toLocaleString('en-US');
  let value_int = value.split('.')[0];
  let value_dec = value.split('.')[1];
  // If the original decimal precision is less than fixed then append it
  if (typeof(value_dec) == 'undefined') {
    value_dec = '';
  }
  if (value_dec.length <= fixed) {
    for (let i = value_dec.length; i<fixed; i++) {
      value_dec = value_dec.concat('0');
    }
  }
  let final_result = value_int+'.'+value_dec.substring(0,2);
  return final_result
}

export const _formatName = (value) => {
  if (typeof value == "string") {
    return value.replace("_", "").replace(".0", "");
  }
};

export const _formatString = (value, length) => {
  if (value.length <= length) {
    return value;
  }
  let half_length = parseInt(length / 2);
  return (
    value.substr(0, length - half_length) + "..." + value.substr(-half_length)
  );
};

export const _showAddress = (addr) => {
  const addressText =
      addr.substr(0, 1) +
      addr.substr(1, 1).toLowerCase() +
      addr.substr(2, 7) +
      "..." +
      addr.substr(-7);

    return addressText;
}

export const _showUserAddressText = (userInfo) => {
  let addressText;
  const fullAddress = userInfo.userAddress;
  if (fullAddress) {
    addressText =
      fullAddress.substr(0, 1) +
      fullAddress.substr(1, 1).toLowerCase() +
      fullAddress.substr(2, 7) +
      "..." +
      fullAddress.substr(-7);
  }
  return addressText;
};

export const autoFill = (oldValue, eventType, newValue) => {
  let resultValue;
  if (eventType == "insertText") {
    try {
      if (parseFloat(oldValue) < 0.01) {
        resultValue = newValue;
      }
    } catch (e) {}
    if (oldValue == undefined) {
      resultValue = newValue;
    } else {
      if (newValue == ".") {
        newValue = ",";
      }
      resultValue = "" + oldValue + newValue;
    }
  } else {
    if (oldValue == undefined || oldValue.toString().length < 1) {
      resultValue = "";
    } else {
      let num_str = oldValue.toString();
      resultValue = num_str.substr(0, num_str.length - 1);
    }
  }
  try {
    resultValue = resultValue.toString();
    if (resultValue[resultValue.length - 1] != ",") {
      resultValue = resultValue.replace(",", ".");
    }
  } catch (e) {}

  return resultValue;
};
