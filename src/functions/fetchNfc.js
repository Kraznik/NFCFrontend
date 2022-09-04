import { config } from "../config/config";
import axios from "axios";
import { uploadFile } from "./creations";

export const fetchNfcData = async (
  nfcId,
  setIsCreated,
  navigate,
  setNfcData,
  momentsData,
  setMomentsData
) => {
  try {
    const url = `${config.apiBaseUrl}/nfcId/${nfcId}`;
    const { data } = await axios.get(url, config.authOptions);
    console.log(data);
    if (data?.error === "NFC Not Found") return navigate("/404/error");
    if (data?.data?.nftTypeId) {
      setIsCreated(true);
    }
    if (data?.data && setNfcData) setNfcData(data?.data);
    if (data?.data && setMomentsData)
      setMomentsData({ ...momentsData, maxEditions: data?.data?.maxEditions });
  } catch (err) {
    console.error(err);
  }
};

export const getAccessToken = async (setAccessToken) => {
  try {
    // const url = `https://honetpot.kraznikunderverse.com/getAccessToken`;
    const url = `${config.apiBaseUrl}/getAccessToken`;

    const { data } = await axios.get(url);
    console.log("access token: ", data);
    setAccessToken(data);
  } catch (err) {}
};

export const retrieveFile = (e, setFile) => {
  const data = e.target.files[0];
  setFile(data);
  console.log("file: ", data);

  e.preventDefault();
};

const postToDb = async (nfcId, nftTypeId, collabAddress, title) => {
  try {
    const url = `${config.apiBaseUrl}/nfcId/${nfcId}`;
    const data = {
      nftTypeId,
      title,
      wallet: collabAddress,
    };
    await axios.patch(url, data, config.authOptions);
  } catch (err) {
    console.error(err);
  }
};

export const mintNfcCreation = async (
  nfcId,
  file,
  AccessToken,
  momentsData,
  setNftTypeId,
  setError,
  setMinting,
  setSuccess,
  navigate
) => {
  setError(false);
  console.log("minting..");
  setMinting(true);
  try {
    if (file && AccessToken) {
      var nftTypeId = await uploadFile(file, AccessToken, momentsData);
      setMinting(false);
    }
    setSuccess(true);
    setNftTypeId(nftTypeId);
    await postToDb(
      nfcId,
      nftTypeId,
      momentsData.collabAddress,
      momentsData.title
    );

    return navigate(`/${nfcId}/created`, { replace: true });
  } catch (err) {
    setMinting(false);
    setError(true);
    console.error(err);
  }
};
