import React, { Component } from "react";
import "./table.css";

class Table extends Component {
  state = {
    scores: [
      { name: "John", score: 8, time: 120 },
      { name: "Rodger", score: 10, time: 140 },
      { name: "Lola", score: 5, time: 180 },
      { name: "Mike", score: 5, time: 140 },
      { name: "Chris", score: 10, time: 135 },
      { name: "Chris", score: 10, time: 135 },
    ],
  };

  handleClick() {
    this.props.history.push('/select');
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
      <div className="main">
        <h1>Scoreboard</h1>
        <div className="titles">
          <h3>Username</h3>
          <h3>Score</h3>
          <h3>Time</h3>
        </div>
        {scores.map((person) => {
          return (
            <div className="table">
              <p>{person.name}</p>
              <p>{person.score}</p>
              <p>{person.time}</p>
            </div>
          );
        })}
        <br />

        <button onClick={() => this.handleClick()} >Try Again</button>

        <button>Logout</button>
      </div>
    );
  }
}

export default Table;

// <p>
//                 {person.name} - {person.score} - {person.time}
//               </p>
