import React from "react";
import Login from "./Login";
import Register from "./Register";
import {useHistory} from "react-router-dom"
import "./home.css";

const Home = () => {

  const history = useHistory();

  const sendBackend = async (event) => {
    history.push('/leaderboard')
  }

  return (
    <div className="homeStyle">
      <div className="header">
      <form onSubmit={sendBackend} className="resForm1">
          <button type="submit" className="link1">
            Leaderboard
          </button>
        </form>
        <h1 className="triv">Trivia Game</h1>
      </div>
      <div className="homeComponents">
        <Login />
        <Register />
      </div>
      <div className="image">
        <img
          src="https://cdn.pixabay.com/photo/2017/03/31/12/16/quiz-2191229_1280.png"
          className="quizImg"
          alt="quiz"
        />
      </div>
    </div>
  );
};

export default Home;
