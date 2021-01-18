import React, { useEffect, useState } from "react";
import axios from "axios";
import Timer from "./Timer";
import "./quiz.css";
import { start } from "./Timer";

const Quiz = () => {
  const [results, setResults] = useState([]);
  const num = 11;
  const difficulty = "easy";

  const [showQ, setQ] = useState(false);
  const handleClick = () => setQ(!showQ);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${num}&difficulty=${difficulty}&type=multiple`
    );
    console.log(res.data.results);
    setResults(res.data.results);
  };
  let count = 1;

  const allQuestions = results.map((results) => {
    count = count + 1;

    return (
      <div>
        <h3>Question: {results.question}</h3>
        <input type="radio" value="answer1" name={count} />
        <label for="answer1">answer 1: {results.correct_answer} </label> <br />
        <input type="radio" value="answer2" name={count} />
        <label for="answer2">
          answer 2: {results.incorrect_answers[0]}{" "}
        </label>{" "}
        <br />
        <input type="radio" value="answer3" name={count} />
        <label for="answer3">
          answer 3: {results.incorrect_answers[1]}{" "}
        </label>{" "}
        <br />
        <input type="radio" value="answer4" name={count} />
        <label for="answer4">
          answer 4: {results.incorrect_answers[2]}{" "}
        </label>{" "}
        <br />
      </div>
    );
  });
  return (
    <div>
      <h1>Questions</h1>
      <Timer value={start} handleClick={handleClick} />

      <div className={`${showQ ? "questionShow" : "questionHide"}`}>
        {allQuestions}
        <button>Submit</button>
      </div>
    </div>
  );
};
export default Quiz;
