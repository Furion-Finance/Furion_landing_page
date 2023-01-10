import Multicall from '@dopex-io/web3-multicall';
import { providerFromEther, providerFromEther_test } from "./provider";

export const newMultiCallProvider = chainId => {
  if (chainId == 1) {
    return new Multicall({
      provider: providerFromEther,
      multicallAddress: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
    });
  }
  else if (chainId == 4) {
    return new Multicall({
      provider: providerFromEther_test,
      multicallAddress: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
    });
  }
};
