import React from 'react';
import { Link } from "react-router-dom";

const CreatePoap = () => {
  return (
    <>
    <form>
        <label>Title</label> <br />
        <input></input><br />
        <label>Description</label> <br />
        <input></input><br />
        <label>Your Address</label> <br />
        <input></input><br />
        <input type="file" id="myFile" name="filename" /> <br />
    </form>
    <button><Link to="/created">Create</Link></button>

    
    </>
  )
}

export default CreatePoap