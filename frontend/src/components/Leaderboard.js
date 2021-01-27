import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import { useHistory } from "react-router-dom";

const Leaderboard = () => {
  
  const [scores, setScores] = useState([]);

  const fetchData = async () => {
    const response = await axios.post("/leaderboard");
    console.log(response.data.leaderBoard);
    console.log("hello from the table page")
    setScores(response.data.leaderBoard);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const history = useHistory();

  const handleClick = async () => {
    history.push("/");
  };

  console.log(scores);

  const componentDid = () => {
    scores.sort((a, b) => {
      return b.score - a.score || a.time.split("s")[0] - b.time.split("s")[0]
    })

    while (scores.length > 10){
      scores.pop()
    }

    return (
      <div className="mainTable">
        <h1 className="scoreboard">Scoreboard</h1>
        <div className="titles">
          <h3 className="userName">Username</h3>
          <h3 className="score">Score</h3>
          <h3 className="time">Time</h3>
        </div>
        {scores.map((scores) => {
          return (
            <div className="table">
              <div className="name">
                <p>{scores.userid.name}</p>
              </div>
              <p className="userScore">{scores.score}</p>
              <p className="userTime">{scores.time}</p>
            </div>
          );
        })}
        <br />

        <div className="buts">
          <button onClick={handleClick} className="logout">
            Home
          </button>
        </div>
      </div>
    );
  };
  return(
    <h1>{componentDid()}</h1>
  ) 
};

export default Leaderboard;
