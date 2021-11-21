const ChainId = {
  ganache: 5777,
  goerli: 5,
  hardhat: 7545,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  bscTestnet: 97,
  bscMainnet: 56,
  MaticTestnet: 80001,
  MaticMainnet: 137,
  ropsten: 3
};

// CLASS A

const fetcher = (url) => fetch(`${url}?key=ckey_a9de306fc3ac4809a59570ab561`).then((res) => res.json())

export const getTokenBalances = (chainId = ChainId.rinkeby, address) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/`).then((res) => res.json())

export const getPortfolio = (chainId = ChainId.rinkeby, address) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/portfolio_v2/`).then((res) => res.json())

export const getTransfers = (chainId = ChainId.rinkeby, address) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/transfers_v2/`).then((res) => res.json())

export const getBlock = (chainId = ChainId.rinkeby, blockHeight) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/block_v2/${blockHeight}/`).then((res) => res.json())

export const getBlockHeights = (chainId = ChainId.rinkeby, startDate, endDate) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/block_v2/${startDate}/${endDate}/`).then((res) => res.json())

export const getLogs = (chainId = ChainId.rinkeby, address) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/events/address/${address}/`).then((res) => res.json())

export const getLogsForTopic = (chainId = ChainId.rinkeby, topic) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/events/topics/${topic}/`).then((res) => res.json())

export const getNftMetadata = (chainId = ChainId.rinkeby, address, tokenId) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/${address}/nft_metadata/${tokenId}/`).then((res) => res.json())

export const getNftTokenIds = (chainId = ChainId.rinkeby, address) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/${address}/nft_token_ids/`).then((res) => res.json())

export const getNftTransactions = (chainId = ChainId.rinkeby, address, tokenId) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/${address}/nft_transactions/${tokenId}/`).then((res) =>
    res.json()
  )

export const getHoldersChanges = (chainId = ChainId.rinkeby, address) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/${address}/token_holders_changes/`).then((res) => res.json())

export const getTokenHolders = (chainId = ChainId.rinkeby, address) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/${address}/token_holders/`).then((res) => res.json())

export const getTokenMetadata = (chainId = ChainId.rinkeby, id) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/tokens/tokenlists/${id}/`).then((res) => res.json())

export const getTransaction = (chainId = ChainId.rinkeby, txHash) =>
  fetch(`https://api.covalenthq.com/v1/${chainId}/trasaction_v2/${txHash}/`).then((res) => res.json())

export const getChains = () => fetch(`https://api.covalenthq.com/v1/chains/`).then((res) => res.json())

export const getChainsStatus = () =>
  fetch(`https://api.covalenthq.com/v1/chains/status/?key=ckey_a9de306fc3ac4809a59570ab5619`).then((res) => res.json())

