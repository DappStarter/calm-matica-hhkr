require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food stock riot pitch history coral light army giant'; 
let testAccounts = [
"0x6643df751bced3ca46ea63ccc8fd838600ac9ff74cf13d01d873c22de35c4ddf",
"0x314c67a1c2dd37c7f748c475c6e32e56a1f2ab40b6694e00a6486756317fb915",
"0xcd8ccd34c025b265e4f00eca9333af00a6bba695bdab37880fc2777f1c841a3e",
"0x3e4a3a428725fdc1b7d809c1d6be44e2fedd01ec14c33e9a343a3f2e4520da75",
"0x32aef79339f0773bc2b4e33e096de354d47b5f44f624397abcf6ac880a348922",
"0x4e01396861da23e8e9055fb0c7340a4d264c84f8dcda2b24fb21854e306f59b1",
"0x2273d0506b2928ea65fa46fe94a3cf4cb7b1ce3c6a0d5ae2cc428cf501dd6346",
"0xd11965257da9ba0ce39907496955a750cd0edbc88c2c32a3f218a7fe8d5e4b68",
"0x47234ebcd8f5216441eed3a71a6c9dfecdca696a549e435c45a242bfa1372dbd",
"0x0ee75b79b2f4f6e8a39313077b2efe85e1b17253d2a2f08d548211b1db59e93b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


