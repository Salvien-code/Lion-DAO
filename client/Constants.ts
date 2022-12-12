import daoData from "./artifacts/contracts/LionDAO.sol/LionDAO.json";
import nftData from "./artifacts/contracts/LionNFT.sol/Lions.json";

export const NFT_CONTRACT_ADDRESS =
  "0x2F73b865A36232EBA48d859B849f83198106A807";

export const DAO_ADDRESS = "0x850166F0965B8a11e55F728962009dA8031C9560";

export const FAKE_NFT_MARKETPLACE =
  "0x66b2C8d08E1006CDB136a60b111A3f5B56395fc2";

export const NFT_ABI = nftData.abi;

export const DAO_ABI = daoData.abi;
