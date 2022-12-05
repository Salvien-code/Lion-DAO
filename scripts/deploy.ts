import { ethers } from "hardhat";
import { NFT_CONTRACT_ADDRESS } from "../Constants";

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
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
