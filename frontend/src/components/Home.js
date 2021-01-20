import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./home.css";

const Home = () => {
  return (
    <div className="homeStyle">
      <div className="header">
        <h1 className="triv">Trivia Game</h1>
      </div>
      <div className="homeComponents">
        <h2 className="home">Home</h2>
        <Login />
        <Register />
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2017/03/31/12/16/quiz-2191229_1280.png"
        className="quizImg"
        alt="quiz"
      />
    </div>
  );
};

export default Home;
