import React, { Component } from "react";
import "./table.css";
import makeConfetti from "./Confetti";

class Table extends Component {
  state = {
    scores: [
      { name: "John", score: 8, time: 120 },
      { name: "Rodger", score: 10, time: 140 },
      { name: "Lola", score: 5, time: 180 },
      { name: "Mike", score: 5, time: 140 },
      { name: "Chris", score: 10, time: 135 },
      { name: "Chris", score: 10, time: 135 },
      { name: "Chris", score: 10, time: 135 },
    ],
  };

  handleClick() {
    this.props.history.push("/select");
  }

  componentDidMount() {
    let data = this.state.scores;
    let sorted = data.sort((a, b) => {
      return b.score - a.score || a.time - b.time;
    });

    this.setState({ scores: sorted });
  }
  render() {
    const { scores } = this.state;
    return (
      <div className="mainTable">
        <makeConfetti />
        <h1 className="scoreboard">Scoreboard</h1>
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
              <p className="userScore">{person.score}</p>
              <p classNAME="userTime">{person.time}</p>
            </div>
          );
        })}
        <br />

        <button onClick={() => this.handleClick()} className="tryAgain">
          Try Again
        </button>

        <button className="logout">Logout</button>
      </div>
    );
  }
}

export default Table;

// <p>
//                 {person.name} - {person.score} - {person.time}
//               </p>
