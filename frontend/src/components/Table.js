import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import "./table.css";
import Confetti from "./Confetti";
import results from "./Results";
import { useHistory } from "react-router-dom";

const Table = () => {
  const [scores, setScores] = useState([])
  const [curScore, setcurScore] = useState({})
  const [name, setName] = useState("")

  const fetchData = async () => {
    const response = await axios.get('/table')
    console.log(response.data.leaderBoard)
    setScores(response.data.leaderBoard)

    console.log(response.data.curScore)
    setcurScore(response.data.curScore)

    setName(response.data.curScore.userid.name)
  
  }
  useEffect(() => {
    fetchData()
  }, [])

  const history = useHistory()
  const handleClick = () => {
    history.push('/select');
  }
  console.log(scores)
  const componentDid = () => {
    let data = scores;
    console.log(data)
    // let sorted = data.sort((a, b) => {
    //   return b.score - a.score || a.time - b.time;
    // });
    // setScores({ scores: sorted });
  
    return (
      <div className="mainTable">
        <h1 className="scoreboard">Scoreboard</h1>
        <Confetti />
        <p>Congratulations {name}, you got {curScore.score}/10 in {curScore.time}</p>
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
          })
          <br/>  
        <div>
        <button onClick={handleClick} >Try Again</button>      
        <button className="logout">Logout</button>
     </div>
    );
  }
  return(
    <h1>{componentDid()}</h1>
  )
};  

export default Table;

