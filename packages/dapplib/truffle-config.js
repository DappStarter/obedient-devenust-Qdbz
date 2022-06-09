require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remain million island clock outer toward'; 
let testAccounts = [
"0x21250dfd2f5e83f922cad0974eff92708839e2a0b3da2751656f28cf94d6f5b0",
"0x30e24d7ffbbff53f57b56d9d3d7f7785e1adca1b510e7f4ef0d20e9515c1bbea",
"0x726cf32a29f8bbfe2dbdd350e60266292eee67b7e2f621d5b3c6272ae25c8f35",
"0x070ac5c602b1c38ef9fcb382107a4b1cf22851642f173301600d12cc5a227063",
"0xee06e35c3cf1dd47ae9d88cb7c46891e8d0fe69cd59e9b93cf480307e03f42a3",
"0x0620aeca6b01fd40f2642b22885c3c37babedce4594e8c6faa55a6c4e775c6fb",
"0x9a81733570740ee131b828a9179a253d4fd6bc1e783174293d865289bca4bfed",
"0x625fb20020e0b0a85e6b72f8c2460d95094a5491d8586047f6a8e0914398fa76",
"0xa5bb6ab3db804b613524001b5f127e26454788399883bf765e2fd3d8bd4cf77a",
"0x84ebfeadf0f1d93b4adaa8b671edf68e3ce4fb77bb24186ac63ed75dbea3ff6f"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

