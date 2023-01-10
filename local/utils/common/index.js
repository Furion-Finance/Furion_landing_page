import Web3 from 'web3';

import { WEB3 } from '../web3';

import ERC20ABI from '~/assets/abis/MockUSD.json';

export const ALLOWANCE_THRESHOLD = 1000000;

export const ipfsToHttp = (url) => {
  return 'https://ipfs.io/ipfs/' + url.substr(6);
}

export const getDecimals = Decimals => {
  switch (Decimals) {
    case 0:
      return 'noether';
    case 1:
      return 'wei';
    case 3:
      return 'kwei';
    case 6:
      return 'mwei';
    case 9:
      return 'gwei';
    case 12:
      return 'microether';
    case 15:
      return 'milliether';
    case 18:
      return 'ether';
    case 21:
      return 'kether';
    case 24:
      return 'mether';
    case 27:
      return 'gether';
    case 30:
      return 'tether';
    default:
      return Decimals;
  }
};

export const toBN = FixNumber => {
  return Web3.utils.toBN(FixNumber.toString());
};

export const getMaxNum = () => {
  return Web3.utils.toBN(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  );
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

export const fromWei = (FixNumber, Decimals) => {
  let FixDecimals = getDecimals(Decimals || 18);
  if (typeof FixNumber === 'number') {
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
export const toWei = (FixNumber, Decimals = 18) => {
  let FixDecimals = getDecimals(Decimals);
  if (typeof FixNumber === 'number') {
    return Web3.utils.toWei(FixNumber.toFixed(Decimals), FixDecimals);
  } else {
    return Web3.utils.toWei(FixNumber, FixDecimals);
  }
};
export const toFloor = (FixNumber, Decimals) => {
  return Math.floor(FixNumber * 10 ** Decimals) / 10 ** Decimals;
};

export const toFixedWei = (weiValue, decimals=2) => {
    /**
     * 8 decimal places if value is < 1 else 2 decimal places
     */
    // value of token is >= 1 //
    let value = weiValue;
    let len = value.length;
    if (len >= 18) {
      let numSigBits = value.length - 18;
      let beforePoint = value.slice(0, numSigBits);
      let afterPoint = value.slice(numSigBits, numSigBits + 2);
      let finalValue = beforePoint + "." + afterPoint;
      return finalValue;
    } else if (len < 18 && value.length > 9){
      let finalValue = "0.";
      let numZeros = 18 - value.length;
      let nonZeroBits = 8 - numZeros;

      // token value < 0.00000000
      if (nonZeroBits <= 0) {
        return "0.0";
      }

      for(let i = 0; i < numZeros; i ++) {
        finalValue += "0";
      }
      
      finalValue += value.slice(0, nonZeroBits);

      let i = finalValue.length - 1;
      // remove insignificant zeros
      for(; i >= 0; i --) {
        if (finalValue[i] != "0") {
          console.log("[ToFixed] Breaking");
          break;
        }
      }
      return finalValue.slice(0, i + 1);
    
    } else {
      return "0.0";
    }
}

export const toFixedNumber = (numberValue, decimals=2) => {
  // the number decimal places fixed to 8, remove any non significant zeros and return;
  // corner case, 0.00000000
  let number = numberValue;
  let i = number.length - 1;
  // keep track of the number of decimal places been read
  let j = 8;
  for(; i >= 0 && j > 0; i --, j--) {
    if (number[i] != '0') {
      break;
    }
  }
  if (j == 0) {
    // no decimal; add a padding zeros after point
    return number.slice(0, i + 1) + "0";
  } else {
    return number.slice(0, i + 1);
  } 
}

export const getContract = async (abi, address) => {
  const web3 = await WEB3();
  if (address === '') {
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
    .then(res => {
      let Balance = fromWei(res, 18);
      return Balance;
    });
};

export const tokenAllowanceCheck = async (
  tokenAddress,
  fromAccount,
  toAccount,
) => {
  const Contracts = await getContract(ERC20ABI, tokenAddress);
  return Contracts.methods
    .allowance(fromAccount, toAccount)
    .call()
    .then(res => {
      let allowance = fromWei(res, 18);
      if (allowance < 100000000) {
        return false;
      }
      return true;
    });
};

export const tokenApprove = async (tokenAddress, fromAccount, toAccount) => {
  const tokenContract = await getContract(ERC20ABI, tokenAddress);
  await tokenContract.methods
    .approve(
      toAccount,
      Web3.utils.toBN(
        '115792089237316195423570985008687907853269984665640564039457584007913129639935',
      ),
    )
    .send({ from: fromAccount })
    .on('transactionHash', hash => {
      console.log('Tx', hash);
    })
    .on('receipt', receipt => {
      // console.log('Receipt', receipt);
      return receipt;
    })
    .on('error', error => {
      console.log('Error', error);
    });
  return true;
};

export const getNativeTokenSymbol = chainId => {
  switch (chainId) {
    case 1:
      return 'ETH';
    case 4:
      return 'ETH';
    case 43113:
      return 'AVAX';
    case 43114:
      return 'AVAX';
    default:
      return 'ETH';
  }
};

export const getNativeTokenAmount = async account => {
  const web3 = await WEB3();

  // console.log('getting native bal');
  // console.log('current provider', web3);

  const balance = await web3.eth.getBalance(account);
  // console.log("native balnce", balance);
  return Number(fromWei(balance)).toFixed(3);
};

export const getTxURL_test = transactionHash => {
  const url = '"https://etherscan.io/tx/' + transactionHash;
  // console.log(url1);
  const txURL =
    '<a href=' +
    url +
    '"' +
    ' style="color: blue" target="blank">View on Explorer</a>';
  // console.log(txURL);
  return txURL;
};

export const getAddressURL_test = address => {
  const url = '"https://testnet.etherscan.io/address/' + address;
  // console.log(url1);
  const txURL =
    '<a href=' +
    url +
    '"' +
    ' style="color: blue" target="blank">View on Explorer</a>';
  // console.log(txURL);
  return txURL;
};

export const getTxURL = transactionHash => {
  const url = '"https://rinkeby.etherscan.io/tx/' + transactionHash;
  // console.log(url1);
  const txURL =
    '<a href=' +
    url +
    '"' +
    ' style="color: blue" target="blank">View on Explorer</a>';
  // console.log(txURL);
  return txURL;
};

export const getAddressURL = address => {
  const url = '"https://etherscan.io/address/' + address;
  // console.log(url1);
  const txURL =
    '<a href=' +
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

export const formatTime = value => {
  if (typeof value == 'string') {
    return value.replace('T', ' ').split('.')[0];
  } else {
    return value;
  }
};

export const _formatNumber = value => {
  if (value == undefined) {
    return '--';
  }
  if (typeof value == 'number') {
    return value.toLocaleString('en-US');
  }
  if (typeof value == 'string') {
    if (value === '--') {
      return '--';
    }
    return Number(value).toLocaleString('en-US');
  }
  return value;
};

export const _formatName = value => {
  if (typeof value == 'string') {
    return value.replace('_', '').replace('.0', '');
  }
};

export const _formatString = (value, length) => {
  if (value.length <= length) {
    return value;
  }
  let half_length = parseInt(length / 2);
  return value.substr(0, length - half_length) + '...' + value.substr(-half_length);
}

export const _showUserAddressText = userInfo => {
  let addressText;
  const fullAddress = userInfo.userAddress;
  if (fullAddress) {
    addressText =
      fullAddress.substr(0, 1) +
      fullAddress.substr(1, 1).toLowerCase() +
      fullAddress.substr(2, 7) +
      '...' +
      fullAddress.substr(-7);
  }
  return addressText;
};

export const autoFill = (oldValue, eventType, newValue) => {
  let resultValue;
  if (eventType == 'insertText') {
    try {
      if (parseFloat(oldValue) < 0.01) {
        resultValue = newValue;
      }
    } catch (e) { }
    if (oldValue == undefined) {
      resultValue = newValue;
    } else {
      if (newValue == '.') {
        newValue = ',';
      }
      resultValue = '' + oldValue + newValue;
    }
  } else {
    if (oldValue == undefined || oldValue.toString().length < 1) {
      resultValue = '';
    } else {
      let num_str = oldValue.toString();
      resultValue = num_str.substr(0, num_str.length - 1);
    }
  }
  try {
    resultValue = resultValue.toString();
    if (resultValue[resultValue.length - 1] != ',') {
      resultValue = resultValue.replace(',', '.');
    }
  } catch (e) { }

  return resultValue;
};
