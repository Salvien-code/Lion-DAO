import { ethers, run } from "hardhat";
import { setTimeout } from "timers/promises";
import { NFT_CONTRACT_ADDRESS } from "../client/Constants";

async function main() {
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();

  console.log(
    `Fake NFT Marketplace deployed to: ${fakeNftMarketplace.address}`
  );

  const LionDAO = await ethers.getContractFactory("LionDAO");
  const lionDAO = await LionDAO.deploy(
    fakeNftMarketplace.address,
    NFT_CONTRACT_ADDRESS,
    {
      value: ethers.utils.parseEther("0.01"),
    }
  );
  await lionDAO.deployed();
  console.log(`LionDAO deployed to: ${lionDAO.address}`);

  console.log(`Waiting for a minute before verifying Consumer contract`);
  await setTimeout(60000);

  await run("verify:verify", {
    address: lionDAO.address,
    arguments: [fakeNftMarketplace.address, NFT_CONTRACT_ADDRESS],
  });
  console.log(`Verified LionDAO contract on Goerli`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
