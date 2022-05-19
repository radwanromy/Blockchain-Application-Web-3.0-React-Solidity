//https://eth-ropsten.alchemyapi.io/v2/ODyEyiyk8rt6-WsbmNhHcPc2aFt5PHrR
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ODyEyiyk8rt6-WsbmNhHcPc2aFt5PHrR',
      accounts: ['61fa9e4a9135f599881fb72a66088c1cdd3627a5ce71d608638dfcb078e7e964'],
    },
  },
};