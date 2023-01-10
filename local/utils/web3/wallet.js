export const connectMetamask = () => {
  try {
    ethereum.request({ method: 'eth_requestAccounts' }).then(async accounts => {
      window.localStorage.setItem('currentType', 'MetaMask');

      let userInfo = {
        isConnect: true,
        userAddress: accounts[0],
      };
      window.$nuxt.$store.dispatch('setUserInfo', userInfo);
      window.$nuxt.$store.commit('update', [
        'admin.connectStatus',
        'connected',
      ]);
      console.log('current account:', accounts[0]);
      window.$nuxt.$store.commit('update', ['admin.connectDialog', false]);
    });
    // }
  } catch (error) {
    console.log('error when connect metamask: ', error);
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
      } else {
        window.$nuxt.$store.dispatch('setUserInfo', {
          isConnect: false,
          userAddress: '',
        });
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
  else if (chainId == 4) {
    provider
      .request({
        method: 'wallet_addEthereumChain',
        params: [ETHEREUM_TESTNET_PARAMS],
      })
      .catch(error => console.log(error));
  }
};