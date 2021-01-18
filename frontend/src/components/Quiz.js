import React, { useEffect, useState } from "react";
import axios from "axios";

const Quiz = () => {

    const [result, setResult] = useState([{}])


    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {
        const res = await axios.get("https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple")
        setResult(res.data.results[0])
        console.log(res.data.results[0])
    }
    console.log(result.incorrect_answers)
    const incorrect = [result.incorrect_answers]
    console.log(incorrect)
    return (
        <div>
            <h1>Questions</h1>
            <p>question: {result.question}</p>
            <p>answer 1: {result.correct_answer}</p>
            <p>answer 2: {result.incorrect_answers}</p>
            <p>answer 3: {incorrect[0]}</p>
            <p>answer 3: {incorrect[1]}</p>
            {/* <p>answer 3: {result.incorrect_answer[1]}</p>
            <p>answer 4: {result.incorrect_answer[2]}</p> */}
        </div>
    )
}




export default Quiz;
