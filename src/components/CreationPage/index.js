import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { config } from "../../config/config";
import {
  fetchNfcData,
  getAccessToken,
  retrieveFile,
  mintNfcCreation,
} from "../../functions/fetchNfc";

const CreatePoap = () => {
  const { nfcId } = useParams();
  const navigate = useNavigate();
  const [isCreated, setIsCreated] = useState(false);
  const [nfcData, setNfcData] = useState();
  const [AccessToken, setAccessToken] = useState();
  const [file, setFile] = useState();
  const [nftTypeId, setNftTypeId] = useState();
  const [momentsData, setMomentsData] = useState({
    title: "",
    description: "",
    maxEditions: "",
    collabAddress: "",
  });

  const [minting, setMinting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [Error, setError] = useState(false);

  useEffect(() => {
    fetchNfcData(
      nfcId,
      setIsCreated,
      navigate,
      setNfcData,
      momentsData,
      setMomentsData
    );
    getAccessToken(setAccessToken);
  }, []);

  return (
    <>
      {!isCreated ? (
        <>
          <form>
            <label>Title</label> <br />
            <input
              type="text"
              placeholder="Name of Creation"
              className="input"
              value={momentsData.title}
              onChange={(e) => {
                setMomentsData({ ...momentsData, title: e.target.value });
              }}
            />
            <br />
            <label>Description</label> <br />
            <input
              type="text"
              placeholder="About Yourself"
              className="input"
              value={momentsData.description}
              onChange={(e) => {
                setMomentsData({ ...momentsData, description: e.target.value });
              }}
            ></input>
            <br />
            <label>Your Address</label> <br />
            <input
              type="text"
              placeholder="ETH Address or ENS"
              className="input"
              value={momentsData.collabAddress}
              onChange={(e) => {
                setMomentsData({
                  ...momentsData,
                  collabAddress: e.target.value,
                });
              }}
            ></input>
            <br />
            <label>Max Editions</label> <br />
            <input value={nfcData?.maxEditions}></input>
            <br />
            <input
              type="file"
              id="myFile"
              name="filename"
              onChange={(e) => retrieveFile(e, setFile)}
            />
            <br />
          </form>
          <button
            onClick={() =>
              mintNfcCreation(
                nfcId,
                file,
                AccessToken,
                momentsData,
                setNftTypeId,
                setError,
                setMinting,
                setSuccess,
                navigate
              )
            }
          >
            {/* <Link to="/created">Create</Link> */}
            Create
          </button>

          {minting ? <div>Minting...</div> : null}
          {Error ? <div>Got some Error...Please try again</div> : null}
          {success ? (
            <div>
              Successfully created! Visit
              <a
                target={"_blank"}
                href={`${config.dgAppBaseUrl}/creation/${nftTypeId}`}
              >
                Creation
              </a>
            </div>
          ) : null}
        </>
      ) : (
        // <div>Already created! :D</div>
        <Navigate to={`/${nfcId}/claim`} replace />
      )}
    </>
  );
};

export default CreatePoap;
