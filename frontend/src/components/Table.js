import React, { Component, useEffect, useState } from "react";
import axios from 'axios'
import "./table.css";
import makeConfetti from "./Confetti";
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
        <makeConfetti />
        <h1 className="scoreboard">Scoreboard</h1>
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
          })}
          <br />  
        
        <button onClick={handleClick} >Try Again</button>      
        <button className="logout">Logout</button>
     </div>
    );
  }
  return(
    <h1>{componentDid()}</h1>
  )
}

export default Table


// class Table extends Component {
//   state = {
//     scores: [
//       { name: "John", score: 8, time: 120 },
//       { name: "Rodger", score: 10, time: 140 },
//       { name: "Lola", score: 5, time: 180 },
//       { name: "Mike", score: 5, time: 140 },
//       { name: "Chris", score: 10, time: 135 },
//       { name: "Chris", score: 10, time: 135 },
//       { name: "Chris", score: 10, time: 135 },
//     ],
//   };

//   handleClick() {
//     this.props.history.push('/select');
//   }
   

// componentDidMount() {
//   let data = this.state.scores;
//   let sorted = data.sort((a, b) => {
//     return b.score - a.score || a.time - b.time;
//   });

//     this.setState({ scores: sorted });
//   }
//   render() {
//     const { scores } = this.state;
//     return (
//       <div className="main">
//         <h1>Scoreboard</h1>
//         <div className="titles">
//           <h3>Username</h3>
//           <h3>Score</h3>
//           <h3>Time</h3>
//         </div>
//         {scores.map((person) => {
//           return (
//             <div className="table">
//               <p>{person.name}</p>
//               <p>{person.score}</p>
//               <p>{person.time}</p>
//             </div>
//           );
//         })}
//         <br />

//         <button onClick={() => this.handleClick()} >Try Again</button>

//         <button>Logout</button>
//       </div>
//     );
//   }
// }

// export default Table;

// <p>
//                 {person.name} - {person.score} - {person.time}
//               </p>
