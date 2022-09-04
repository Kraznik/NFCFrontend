import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import { fetchNfcData } from "../../functions/fetchNfc";

// use title as nftTypeId now
const StartCreating = () => {
  const { nfcId } = useParams();
  const navigate = useNavigate();
  const [isCreated, setIsCreated] = useState(false);

  useEffect(() => {
    fetchNfcData(nfcId, setIsCreated, navigate);
  }, []);

  return (
    <>
      {!isCreated ? (
        <>
          <h1>Start Creation your own POAP with public goods inside it</h1>
          <button>
            <Link to={`/${nfcId}/create`}>Create</Link>
          </button>
        </>
      ) : (
        // <div>Go to collection</div>
        <Navigate to={`/${nfcId}/claim`} replace />
      )}
    </>
  );
};

export default StartCreating;
