import React from 'react';
import Moment from "../../../src/Moment.svg";
import { Link } from "react-router-dom";

const ClaimCReation = () => {
  return (
    <>
    <img src={Moment} />
    <h1>Title</h1>
    <p>Description</p>

    <form>
        <input placeholder='kraznik.eth'></input>
    </form>

    <button><Link to="/claimed">Claim Now</Link></button>
    
    </>
  )
}

export default ClaimCReation