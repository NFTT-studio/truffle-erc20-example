const HDWalletProvider = require('@truffle/hdwallet-provider');
// NFTMart Node Development Account Gerald
// address: 0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b
const privateKeyDev =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';

module.exports = {
   networks: {
      // Moonbeam Development Network
      development: {
         provider: () => {
            if (!privateKeyDev.trim()) {
               throw new Error(
                  'Please enter a private key with funds, you can use the default one'
               );
            }
            return new HDWalletProvider(
               privateKeyDev,
               // 'http://localhost:9933/'
               'https://staging.nftmart.io/rpc/http'
            );
         },
         network_id: '*',
         networkCheckTimeout: 999999,
      },
   },
   // Solidity 0.8 Compiler
   compilers: {
      solc: {
         version: '^0.8',
      },
   },
   plugins: ['truffle-plugin-verify'],
};
