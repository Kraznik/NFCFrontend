import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Moment from "../../../src/Moment.svg";
import { config } from "../../config/config";
import { fetchNfcData } from "../../functions/fetchNfc";

const CreationCreated = () => {
  const { nfcId } = useParams();
  const navigate = useNavigate();
  const [nfcData, setNfcData] = useState();
  const [isCreated, setIsCreated] = useState(false);

  useEffect(() => {
    fetchNfcData(nfcId, setIsCreated, navigate, setNfcData);
  }, []);

  return (
    <>
      {isCreated ? (
        <>
          <h1>Congratulations 🥳</h1>
          <h2>Your own public good powered POAP has been created </h2>

          <h1>Title: {nfcData?.title}</h1>
          <h3>Creator: {nfcData.wallet}</h3>
          {/* <p>Description</p> */}
          <a
            target={"_blank"}
            href={`${config.dgAppBaseUrl}/creation/${nfcData.nftTypeId}`}
          >
            View On DoinGud ->
          </a>
          <img src={Moment}></img>
          <br />

          <button>View Analytics</button>
        </>
      ) : (
        <div>Not Created yet!</div>
      )}
    </>
  );
};

export default CreationCreated;
