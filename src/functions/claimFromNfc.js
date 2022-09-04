import { config } from "../config/config";
import axios from "axios";
import { resolveEns } from "./utils/resolve";

export const claimFromNfc = async (
  nfcId,
  nftTypeId,
  toWallet,
  setClaiming,
  navigate
) => {
  setClaiming(true);
  var toAddress = toWallet;
  if (toAddress.trim().length !== 42 && toAddress.slice(-3) === "eth") {
    toAddress = await resolveEns(toAddress);
  }

  // post endpoint in backend with mintNfts
  try {
    const url = `${config.apiBaseUrl}/claimWithNfc`;
    const post_data = {
      nftTypeId,
      toAddress,
    };
    const { data } = await axios.post(url, post_data, config.authOptions);
    console.log(data);
    return navigate(`/${nfcId}/claimed`, { replace: true });
  } catch (err) {
    console.error(err);
    setClaiming(false);
  }
};
