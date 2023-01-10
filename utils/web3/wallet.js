import { connect_info } from "@/config/user_info/profile";
import {initIP} from "@/config/ip";

export const connectMetamask = async function() {
  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    window.localStorage.setItem('currentType', 'MetaMask');
    let address_available = initIP(accounts[0]);
    if (!address_available) throw "your address is not available";
    let userInfo = {
      isConnect: true,
      userAddress: accounts[0],
    };
    connect_info.address = accounts[0];
    console.log('Connect info', connect_info)
    window.$nuxt.$store.commit('SET_USER_INFO', userInfo);
    window.$nuxt.$store.commit('update', [
      'admin.connectStatus',
      'connected',
    ]);
    console.log('current account:', accounts[0]);
    window.$nuxt.$store.commit('update', ['admin.connectDialog', false]);
    // }
  } catch (error) {
    console.log('error when connect metamask: ', error);
  } finally {
    return
  }
};

export const addToken = async function ({
  tokenAddress,
  tokenSymbol,
  tokenDecimals,
  tokenImage,
}) {
  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    await ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const watchNetWorkChange = () => {
  if (window.ethereum) {
    ethereum.on('chainChanged', chainID => {
      window.chainID = chainID;

      window.$nuxt.$store.dispatch('setChainId', chainID * 1);

      window.location.reload();
    });
  } else {
    console.log('please install metamask');
  }
};

export const watchAccountChange = () => {
  if (window.ethereum) {
    ethereum.on('accountsChanged', async account => {
      if (account && account.length) {
        window.$nuxt.$store.dispatch('setUserInfo', {
          isConnect: true,
          userAddress: account[0],
        });
        connect_info.address = account[0];
      } else {
        window.$nuxt.$store.dispatch('setUserInfo', {
          isConnect: false,
          userAddress: '',
        });
        connect_info.address = '';
      }
      window.location.reload();
    });
  } else {
    console.log('please install metamask');
  }
};

export const addEthereumNetwork = provider => {
  const chainId = getChainId();
  if (chainId == 1) {
    provider
      .request({
        method: 'wallet_addEthereumChain',
        params: [ETHEREUM_MAINNET_PARAMS],
      })
      .catch(error => console.log(error));
  }
  else if (chainId == 5) {
    provider
      .request({
        method: 'wallet_addEthereumChain',
        params: [ETHEREUM_TESTNET_PARAMS],
      })
      .catch(error => console.log(error));
  }
};