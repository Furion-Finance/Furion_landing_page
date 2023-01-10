import Web3 from 'web3';
import { getProvider, providerFromEther_test, providerFromEther } from './provider';

export const WETH_ADDRESS = {
  'mainnet': '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  'rinkeby': '0x2005044C4fFf7dc1EfC1960939a6FeFA6abecffe'
}

export const ETHEREUM_MAINNET_PARAMS = {
  chainId: '0x1',
  chainName: 'Ethereum Mainnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: [providerFromEther],
  blockExplorerUrls: ['https://etherscan.io/'],
};

export const ETHEREUM_TESTNET_PARAMS = {
  chainId: '0x4',
  chainName: 'Ethereum Rinkeby Testnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: [providerFromEther_test],
  blockExplorerUrls: ['https://testnet.etherscan.io/'],
};

export const WEB3 = async () => {
  const walletType = window.$nuxt.$store.state.walletType;

  if (walletType == 'WalletConnect') {
    const walletConnectProvider = await getProvider();
    return new Web3(walletConnectProvider);
  } else {
    return new Web3(
      window.ethereum || new Web3.providers.HttpProvider(providerFromEther),
    );
  }
};

export const getChainId = async () => {
  const web3 = await WEB3();
  return new web3.eth.getChainId();
};

export const getChainName = (chainId, mode) => {
  switch (chainId) {
    case 1:
      return mode == 0 ? 'Ethereum Mainnet' : 'Ethereum';
    case 4:
      return mode == 0 ? 'Ethereum Rinkeby' : 'Rinkeby';
    default:
      return mode == 0 ? 'Unsupported Network' : 'Unsupported';
  }
};

export const getBlockNumber = async () => {
  const web3 = await WEB3();
  let blockNumber = new web3.eth.getBlockNumber();
  return blockNumber;
};