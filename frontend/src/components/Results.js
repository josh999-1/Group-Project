import React from "react"
import "./results.css";
import {useHistory} from "react-router-dom"
import axios from "axios"

const Results = () => {

  const history = useHistory();

  const sendBackend = async (event) =>{
    console.log("here from results")
    history.push('/table')
  }
  
  return (
    <div className="cluster">
      <div className="middle">
        <h1 className="message">
          Well played, you're done! Now lets see how you did!{" "}
        </h1>
        <form onSubmit={sendBackend} className="resForm">
          <button type="submit" className="link">
            Click here to view your place on our leaderboards
          </button>
        </form>
      </div>
      <div className="picture">
        <img
          src="https://cdn.pixabay.com/photo/2018/12/05/08/44/win-3857339_1280.png"
          className="finish"
        ></img>
      </div>
    </div>
  );
};

export default Results;
