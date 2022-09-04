import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Moment from "../../../src/Moment.svg";
import { fetchNfcData } from "../../functions/fetchNfc";
import { Link } from "react-router-dom";

const ClaimCreation = () => {
  const { nfcId } = useParams();
  const navigate = useNavigate();
  const [nfcData, setNfcData] = useState();
  const [isCreated, setIsCreated] = useState(false);

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
        <input placeholder="kraznik.eth"></input>
      </form>

      <button>
        <Link to="/claimed">Claim Now</Link>
      </button>
    </>
  );
};

export default ClaimCreation;
