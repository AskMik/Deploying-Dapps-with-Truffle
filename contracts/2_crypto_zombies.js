var CryptoZombies =artifacts.require("./CryptoZombies.sol");
module.export = function(deployer) {
    deployer.deploy(CryptoZombies);
};