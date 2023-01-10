export const DialogInfo = {
  Step: 0,
  DialogVisible: false,
  StepsInfo: [],
  ImgOptions: [
    require("@/assets/images/loading/1.png"),
    require("@/assets/images/loading/2.png"),
    require("@/assets/images/loading/3.png"),
  ],
};

export const ProcessInfo = {
  APPROVE_FUR: {
    intro: "Approval for FUR",
    detail:
      "To use FUR, you firstly need to approve our contract to spend your token, please wait for a while",
  },
  APPROVE_FX: {
    intro: "Approval for F-X Token",
    detail:
      "To use F-X, you firstly need to approve our contract to spend your token, please wait for a while",
  },
  APPROVE_NFT: {
    intro: "Approval for NFT",
    detail:
      "To use NFT, you firstly need to approve our contract to spend your token, please wait for a while",
  },
  APPROVE_TOKEN: {
    intro: "Approve token for contract spending",
    detail:
      "You need to first approve our contract to transfer your tokens to the market, please wait a while",
  },
  CREATE_SEPARATE_POOL: {
    intro: "Create Separate Pool for NFT",
    detail:
      "You are creating a new separate pool, please sign and wait for the transaction to be done",
  },
  BUY_NFT: {
    intro: "Buy NFT",
    detail:
      "Your new NFT is just one click away! Please sign and wait for the transaction to complete",
  },
  STORE_NFT: {
    intro: "Store NFT",
    detail:
      "You are storing your NFT to the pool, please sign and wait for the transaction to complete",
  },
  LOCK_NFT: {
    intro: "Lock NFT",
    detail:
      "You are locking your NFT to the pool for 30 days, please sign and wait for the transaction to complete",
  },
  SWAP_APPROVE_TOKEN: {
    intro: "Approval for Token",
    detail:
      "To use furion swap, you firstly need to approve our contract to spend your token, please wait for a while",
  },
  SWAP_TOKEN: {
    intro: "Swap on Furion Swap",
    detail:
      "You are going to swap tokens on Furion, please sign and wait for the transaction to be done",
  },
  SWAP_APPROVE_TOKEN_1: {
    intro: "Approval for Token 1",
    detail:
      "To provide liquidity on furion swap, you firstly need to approve our contract to spend your token",
  },
  SWAP_APPROVE_TOKEN_2: {
    intro: "Approval for Token 2",
    detail:
      "To provide liquidity on furion swap, you firstly need to approve our contract to spend your token",
  },
  SWAP_ADD_LIQUIDITY: {
    intro: "Add liquidity on Furion Swap",
    detail:
      "You are going to provide liquidity on Furion, please sign and wait for the transaction to be done",
  },
  APPROVE_LIQUIDITY_TOKEN: {
    intro: "Approval for liquidity token",
    detail: "Approve our contract to spend your liquidity token",
  },
  SWAP_REMOVE_LIQUIDITY: {
    intro: "Remove liquidity on Furion Swap",
    detail:
      "You are going to remove liquidity on Furion, please sign and wait for the transaction to be done",
  },
  FARM_APPROVE_TOKEN: {
    intro: "Approval for liquidity token",
    detail: "Approve our contract to spend your liquidity token",
  },
  FARM_ADD_LIQUIDITY: {
    intro: "Add Liquidity on Furion Farm",
    detail:
      "You are going to add liquidity to Furion, please sign and wait for the transaction to be done",
  },
  FARM_REMOVE_LIQUIDITY: {
    intro: "Remove liquidity on Furion Farm",
    detail:
      "You are going to remove liquidity on Furion, please sign and wait for the transaction to be done",
  },
  FARM_HARVEST_REWARD: {
    intro: "Harvest Reward on Furion Farm",
    detail:
      "You are going to redeem your farming reward on Furion, please sign and wait for the transaction to be done",
  },
  SUPPLY_TOKEN: {
    intro: "Supply token to money market",
    detail:
      "You are just a click away from starting to earn some juicy interest! Please sign and wait for the transaction to complete",
  },
  WITHDRAW_TOKEN: {
    intro: "Withdraw token and get interest",
    detail:
      "You are just a click away to receive the juicy interest! Please sign and wait for the transaction to complete",
  },
  BORROW_TOKEN: {
    intro: "Borrow token from money market",
    detail:
      "You are going to borrow tokens from the market, please sign and wait for the transaction to complete",
  },
  REPAY_TOKEN: {
    intro: "Repay borrowed tokens",
    detail:
      "You are going to repay tokens you borrowed, please sign and wait for the transaction to complete",
  },
  ENTER_MARKET: {
    intro: "Enter market and use deposited asset as collateral",
    detail:
      "You are going to enter a token market which allows you to use the token as colalteral, please sign and wait for the transaction to complete",
  },
  CLAIM_TEST_TOKEN: {
    intro: "Claim BAYC and a random NFT",
    detail: "Claim BAYC and a random NFT"
  },
  ADD_TOKENS: {
    intro: "Add FFTs and claimed NFTs to your wallet",
    detail: "Add FFTs and received NFTs to your wallet"
  }
};

export const initDialog = (DialogInfo) => {
  DialogInfo.Step = 0;
  DialogInfo.DialogVisible = false;
  DialogInfo.StepsInfo = [];
  return DialogInfo;
};
export const closeDialog = (DialogInfo) => {
  DialogInfo.DialogVisible = false;
};
// 修改DialogInfo里的属性
export const openDialog = (DialogInfo, StepsInfo) => {
  DialogInfo.Step = 0;
  DialogInfo.StepsInfo = StepsInfo; //StepsInfo=那两行字的数组对象
  for (let i = 0; i < DialogInfo.StepsInfo.length; i++) {
    DialogInfo.StepsInfo[i].step = i; //只有一个元素 所以是 DialogInfo.StepsInfo[0].step = 0;
  }
  DialogInfo.DialogVisible = true;
};
export const stepDialog = (DialogInfo) => {
  DialogInfo.Step += 1;
  if (DialogInfo.Step >= DialogInfo.StepsInfo.length) {
    closeDialog(DialogInfo);
    return;
  }
};

export const stepDialogByNum = (DialogInfo) => {
  DialogInfo.StepsInfo[DialogInfo.Step].nowStep += 1;
  if (
    DialogInfo.StepsInfo[DialogInfo.Step].nowStep >
    DialogInfo.StepsInfo[DialogInfo.Step].allStep
  ) {
    DialogInfo.Step += 1;
  } else {
    DialogInfo.StepsInfo[DialogInfo.Step].detail =
      DialogInfo.StepsInfo[DialogInfo.Step].nowStep.toString() +
      "/" +
      DialogInfo.StepsInfo[DialogInfo.Step].allStep.toString() +
      " " +
      DialogInfo.StepsInfo[DialogInfo.Step].info;
  }

  if (DialogInfo.Step >= DialogInfo.StepsInfo.length) {
    closeDialog(DialogInfo);
    return;
  }
};
