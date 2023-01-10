import WalletConnectProvider from '@walletconnect/web3-provider';
import QRCodeModal from '@walletconnect/qrcode-modal';

var provider;

export const providerFromEther_test = 'https://rinkeby.infura.io/v3/b055ef92466c438abd675be410686a39';
export const providerFromEther = 'https://mainnet.infura.io/v3/b055ef92466c438abd675be410686a39';

export const getProvider = () => {
  // console.log('get provider');
  return provider;
};

export const initProvider = async () => {
  // console.log('init provider');
  provider = new WalletConnectProvider({
    rpc: {
      1: providerFromEther,
      4: providerFromEther_test,
    },
    chainId: 4,
    bridge: 'https://bridge.walletconnect.org',
    qrcodeModal: QRCodeModal,
    qrcodeModalOptions: {
      mobileLinks: ['metamask', 'trust'],
    },
  });

  await provider.enable();

  return provider;
};

export const removeProvider = async () => {
  console.log('remove provider');
  await provider.disconnect();
};
