import React, { useEffect, useState } from "react";
import axios from "axios";
import Timer from "./Timer";
import "./quiz.css";
import { useHistory } from "react-router-dom";
import { start, urTime } from "./Timer";
import { diff, cate } from "./Select";

const Quiz = () => {
  const [showQ, setQ] = useState(false);
  const handleClick = () => setQ(!showQ);

  const [results, setResults] = useState([]);
  let score = [];
  console.log(diff, cate);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${cate}&difficulty=${diff}&type=multiple`
    );
    console.log(res.data.results);
    setResults(res.data.results);
  };

  const formHandler = async (event) => {
    console.log(event.target.value);
    if (event.target.value === "correct") {
      score[event.target.name] = "correct";
    } else if (event.target.value !== "correct") {
      score[event.target.name] = "incorrect";
    }
    console.log(score);
    console.log(urTime);
  };
  const history = useHistory();

  const sendBackend = async (event) => {
    console.log(urTime);
    const body = {
      score: score,
      time: urTime,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(score);
    console.log(event.value);

    if (score.length == 10){   
      history.push('/results');
      await axios.post("/results", body, config);
    } 
    else {
      console.log("not all answered");
    }
  };
  let count = -1;

  const allQuestions = results.map((results) => {
    count = count + 1;
    let cor = results.correct_answer;
    let incor1 = results.incorrect_answers[0];
    let incor2 = results.incorrect_answers[1];
    let incor3 = results.incorrect_answers[2];

    for (let x=0; x < 10; x++) {
      results.question = results.question.replace("&quot;", '"').replace("&#039;", "'").replace("&amp;", "&").replace("&pi;", "π")
      cor = cor.replace("&quot;", '"').replace("&#039;", "'").replace("&amp;", "&").replace("&pi;", "π")
      incor1 = incor1.replace("&quot;", '"').replace("&#039;", "'").replace("&amp;", "&").replace("&pi;", "π")
      incor2 = incor2.replace("&quot;", '"').replace("&#039;", "'").replace("&amp;", "&").replace("&pi;", "π")
      incor3 = incor3.replace("&quot;", '"').replace("&#039;", "'").replace("&amp;", "&").replace("&pi;", "π")
      
    }
    let num = Math.floor(Math.random() * 4) + 1;
    console.log(score);
    

    if (num === 1) {
      return (
        <div>
          <h3>Question: {results.question}</h3>
          <input type="radio" value="correct" name={count} />
          <label for="answer1">answer 1: {cor} </label> <br />
          <input type="radio" value="answer2" name={count} />
          <label for="answer2">answer 2: {incor1} </label> <br />
          <input type="radio" value="answer3" name={count} />
          <label for="answer3">answer 3: {incor2} </label> <br />
          <input type="radio" value="answer4" name={count} />
          <label for="answer4">answer 4: {incor3} </label> <br />
        </div>
      );
    } else if (num === 2) {
      return (
        <div>
          <h3>Question: {results.question}</h3>
          <input type="radio" value="answer1" name={count} />
          <label for="answer1">answer 1: {incor1} </label> <br />
          <input type="radio" value="correct" name={count} />
          <label for="answer2">answer 2: {cor} </label> <br />
          <input type="radio" value="answer3" name={count} />
          <label for="answer3">answer 3: {incor2} </label> <br />
          <input type="radio" value="answer4" name={count} />
          <label for="answer4">answer 4: {incor3} </label> <br />
        </div>
      );
    } else if (num === 3) {
      return (
        <div>
          <h3>Question: {results.question}</h3>
          <input type="radio" value="answer1" name={count} />
          <label for="answer1">answer 1: {incor1} </label> <br />
          <input type="radio" value="answer2" name={count} />
          <label for="answer2">answer 2: {incor2} </label> <br />
          <input type="radio" value="correct" name={count} />
          <label for="answer3">answer 3: {cor} </label> <br />
          <input type="radio" value="answer4" name={count} />
          <label for="answer4">answer 4: {incor3} </label> <br />
        </div>
      );
    } else {
      return (
        <div>
          <h3>Question: {results.question}</h3>
          <input type="radio" value="answer1" name={count} />
          <label for="answer1">answer 1: {incor1} </label> <br />
          <input type="radio" value="answer2" name={count} />
          <label for="answer2">answer 2: {incor2} </label> <br />
          <input type="radio" value="answer3" name={count} />
          <label for="answer3">answer 3: {incor3} </label> <br />
          <input type="radio" value="correct" name={count} />
          <label for="answer4">answer 4: {cor} </label> <br />
        </div>
      );
    }
  });
  return (
    <div className="allQ">
      <h1>Questions</h1>

      <Timer value={start} handleClick={handleClick} />

      <div className={`${showQ ? "questionShow" : "questionHide"}`}>
        <form onChange={formHandler}>{allQuestions}</form>

        <form onSubmit={sendBackend}>
          <button type="submit" className="sub">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quiz
