import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import "./table.css";
import Confetti from "./Confetti";

class Table extends Component {
  state = {
    scores: [
      { name: "John", score: 8, time: 120 },
      { name: "Rodger", score: 10, time: 140 },
      { name: "Lola", score: 5, time: 180 },
      { name: "Mike", score: 5, time: 140 },
      { name: "Chris", score: 10, time: 135 },
    ],
  }

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
        <h3>Congratulations user, you got 5/10 correct in 1m 35s. </h3>
        <h3>Check your how you did on our scoreboard below</h3>
        <div className="titles">
          <h3 className="userName">Username</h3>
          <h3 className="score">Score</h3>
          <h3 className="time">Time</h3>
        </div>
        {scores.map((person) => {
          return (
            <div className="table">
              <div className="name">
                <p>{person.name}</p>
              </div>
            );
          })
          <br />  
        
        <button onClick={handleClick} >Try Again</button>      
        <button className="logout">Logout</button>
     </div>
    );
  }
  return(
    <h1>{componentDid()}</h1>
  )
}  };

export default Table;
