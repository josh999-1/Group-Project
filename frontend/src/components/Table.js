import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./table.css";
import Confetti from "./Confetti";
import results from "./Results";
import { useHistory } from "react-router-dom";

const Table = () => {
  

  const [scores, setScores] = useState([]);
  const [curScore, setcurScore] = useState({});
  const [name, setName] = useState("");

  const fetchData = async () => {
    const response = await axios.post("/table");
    console.log(response.data.leaderBoard);
    console.log("hello from the table page")
    setScores(response.data.leaderBoard);

    console.log(response.data.curScore);
    setcurScore(response.data.curScore);

    setName(response.data.curScore.userid.name);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const history = useHistory();
  const handleClick = async () => {
    history.push("/select");
    await axios.get("/tryAgain");
  };
  const handleClick1 = async () => {
    history.push("/");
    await axios.get("/logout");
  };

  console.log(scores);

  const componentDid = () => {
    scores.sort((a, b) => {
      // let arr = b.time.split("s")
      // arr = arr[0].split("m")

      // let arr1 = a.time.split("s")
      // arr1 = arr1[0].split("m")


      // if (arr.length > 1 || arr1.length > 1){
      //   console.log(arr, arr1)
      // }  
      return b.score - a.score || a.time.split("s")[0] - b.time.split("s")[0]
    })

    while (scores.length > 10){
      scores.pop()
    }

    return (
      <div className="mainTable">
        <h1 className="scoreboard">Scoreboard</h1>
        <Confetti />
        <p className="para">
          Congratulations {name}, you got {curScore.score}/10 in {curScore.time}
        </p>
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
          <button onClick={handleClick} className="tryAgain">
            Try Again
          </button>
          <button onClick={handleClick1} className="logout">Logout</button>
        </div>
      </div>
    );
  };
  return(
    <h1>{componentDid()}</h1>
  ) 
};

export default Table;
