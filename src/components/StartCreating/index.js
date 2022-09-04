import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchNfcData } from "../../functions/fetchNfc";

// use title as nftTypeId now
const StartCreating = () => {
  const { nfcId } = useParams();
  const [isCreated, setIsCreated] = useState(false);

  useEffect(() => {
    fetchNfcData(nfcId, setIsCreated);
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
        <div>Go to collection</div>
      )}
    </>
  );
};

export default StartCreating;
