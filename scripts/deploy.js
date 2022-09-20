const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const TokenEva = await hre.ethers.getContractFactory("TokenEva");
  const cryptoToken = await TokenEva.deploy();
  await cryptoToken.deployed();
  console.log("cryptoToken deployed to:", cryptoToken.address);

  fs.writeFileSync('./config.js', `export const cryptoTokenEvaAddress = "${cryptoToken.address}"`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
