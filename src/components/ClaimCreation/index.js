import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Moment from "../../../src/Moment.svg";
import { fetchNfcData } from "../../functions/fetchNfc";
import { Link } from "react-router-dom";
import { claimFromNfc } from "../../functions/claimFromNfc";

const ClaimCreation = () => {
  const { nfcId } = useParams();
  const navigate = useNavigate();
  const [nfcData, setNfcData] = useState();
  const [isCreated, setIsCreated] = useState(false);
  const [enteredWallet, setEnteredWallet] = useState();
  const [claiming, setClaiming] = useState(false);

  useEffect(() => {
    fetchNfcData(nfcId, setIsCreated, navigate, setNfcData);
  }, []);
  return (
    <>
      <img src={Moment} />
      <h1>Title: {nfcData?.title}</h1>
      <h3>Creator: {nfcData?.wallet}</h3>
      <p>Description</p>

      <form>
        <input
          type="text"
          placeholder="kraznik.eth"
          className="input"
          value={enteredWallet}
          onChange={(e) => {
            setEnteredWallet(e.target.value);
          }}
        ></input>
      </form>

      <button
        onClick={() => {
          claimFromNfc(
            nfcId,
            nfcData?.nftTypeId,
            enteredWallet,
            setClaiming,
            navigate
          );
        }}
      >
        {/* <Link to="/nfcId/claimed">Claim Now</Link> */}
        Claim Now
      </button>

      {claiming ? <div>Claiming...</div> : null}
    </>
  );
};

export default ClaimCreation;
