require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

//#remember secret key
const fs = require('fs');
const privateKey = fs.readFileSync('.secret').toString();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  networks: {
    hardhat: { chainId: 1337 },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/ccb043108c1f408aba7d179446c65c7b',
      accounts: [
        `a37d9b8daa93f3c557317232de6bec876af952eb72c2a07e58c26fc110c9292d`,
      ],
    },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/ccb043108c1f408aba7d179446c65c7b',
      accounts: [
        `a37d9b8daa93f3c557317232de6bec876af952eb72c2a07e58c26fc110c9292d`,
      ],
    },
  },
  solidity: '0.8.4',
};
