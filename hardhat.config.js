require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const chainIds = {
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
  ropsten: 3,
};

// Ensure that we have all the environment variables we need.
const mnemonic = process.env.MNEMONIC;
const PRTVATE_KEY ='';
if (!mnemonic) {
  throw new Error("Please set your MNEMONIC in a .env file");
}

const infuraApiKey = process.env.INFURA_API_KEY;
if (!infuraApiKey) {
  throw new Error("Please set your INFURA_API_KEY in a .env file");
}


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  networks:{
  hardhat: {
    accounts: {
      mnemonic,
    },
    chainId: chainIds.hardhat,
  },
  ganache: {
    chainId: 5777,
    url: "http://127.0.0.1:8545/",
  },

  mainnet: {
    accounts: {
      count: 10,
      initialIndex: 0,
      mnemonic,
      path: "m/44'/60'/0'/0",
    },
    chainId: chainIds["mainnet"],
    url: "https://mainnet.infura.io/v3/" + infuraApiKey + "",
  },
  rinkeby: {
    saveDeployments: true,
    accounts: {
      initialIndex: 0,
      mnemonic,
      // path: "m/44'/60'/0'/0",
    },
    chainId: chainIds["rinkeby"],
    url: "https://rinkeby.infura.io/v3/" + infuraApiKey + "",
  },
  bscTestnet: {
    saveDeployments: true,
    accounts: {
      initialIndex: 0,
      mnemonic,
      // path: "m/44'/60'/0'/0",
    },
    chainId: chainIds["bscTestnet"],
    url: "https://data-seed-prebsc-1-s1.binance.org:8545",
  },
  bscMainnet: {
    saveDeployments: true,
    accounts: {
      initialIndex: 0,
      mnemonic,
      // path: "m/44'/60'/0'/0",
    },
    //accounts: [PRTVATE_KEY],
    chainId: chainIds["bscMainnet"],
    url: "https://bsc-dataseed.binance.org/",
  },
  MaticTestnet: {
    saveDeployments: true,
    accounts: {
      initialIndex: 0,
      mnemonic,
      // path: "m/44'/60'/0'/0",
    },
    // chainId: chainIds["MaticTestnet"],
    chainId: 80001,
    url: "https://rpc-mumbai.maticvigil.com",
  },
  MaticMainnet: {
    saveDeployments: true,
    accounts: {
      initialIndex: 0,
      mnemonic,
      // path: "m/44'/60'/0'/0",
    },
    chainId: chainIds["MaticMainnet"],
    url: "https://rpc-mainnet.maticvigil.com/",
  },
},
};
