import React, { useEffect, useState } from "react";
import axios from "axios";
import { diff, cate } from "./Select"


const Quiz = () => {

    const [results, setResults] = useState([])
    const [score, setScore] = useState("")
    console.log(diff, cate)

    useEffect(() => {
        fetchApi();
    }, [])

    const fetchApi = async () => {
        const res = await axios.get(`https://opentdb.com/api.php?amount=10&category=${cate}&difficulty=${diff}&type=multiple`)
        console.log(res.data.results) 
        setResults(res.data.results)  
    }  
    
    const formHandler = (event) => {
        console.log(score)
    }
    
    let count = 1

    const allQuestions = results.map((results) => {
        count = count + 1
        const cor = results.correct_answer
        const incor1 = results.incorrect_answers[0]
        const incor2 = results.incorrect_answers[1]
        const incor3 = results.incorrect_answers[2]
        let num = Math.floor(Math.random()* 4) + 1

        if (num == 1){
            return(
                <div>
                    <h3>Question: {results.question}</h3>
                    <input type="radio" value="answer1" name={count} />
                    <label for="answer1">answer 1: {cor} </label> <br/>
                
                    <input type="radio" value="answer2" name={count} />
                    <label for="answer2">answer 2: {incor1} </label> <br/>
                
                    <input type="radio" value="answer3" name={count}/>
                    <label for="answer3">answer 3: {incor2} </label> <br/>
                
                    <input type="radio" value="answer4" name={count}/>
                    <label for="answer4">answer 4: {incor3} </label> <br/>                
                </div>
            )  
        }
        else if (num == 2){
            return(
                <div>
                    <h3>Question: {results.question}</h3>
                    <input type="radio" value="answer1" name={count} />
                    <label for="answer1">answer 1: {incor1} </label> <br/>
                
                    <input type="radio" value="answer2" name={count} />
                    <label for="answer2">answer 2: {cor} </label> <br/>
                
                    <input type="radio" value="answer3" name={count}/>
                    <label for="answer3">answer 3: {incor2} </label> <br/>
                
                    <input type="radio" value="answer4" name={count}/>
                    <label for="answer4">answer 4: {incor3} </label> <br/>                
                </div>
            )  
        }
        else if (num == 3){
            return(
                <div>
                    <h3>Question: {results.question}</h3>
                    <input type="radio" value="answer1" name={count} />
                    <label for="answer1">answer 1: {incor1} </label> <br/>
                
                    <input type="radio" value="answer2" name={count} />
                    <label for="answer2">answer 2: {incor2} </label> <br/>
                
                    <input type="radio" value="answer3" name={count}/>
                    <label for="answer3">answer 3: {cor} </label> <br/>
                
                    <input type="radio" value="answer4" name={count}/>
                    <label for="answer4">answer 4: {incor3} </label> <br/>                
                </div>
            )  
        }
        else{
            return(
                <div>
                    <h3>Question: {results.question}</h3>
                    <input type="radio" value="answer1" name={count} />
                    <label for="answer1">answer 1: {incor1} </label> <br/>
                
                    <input type="radio" value="answer2" name={count} />
                    <label for="answer2">answer 2: {incor2} </label> <br/>
                
                    <input type="radio" value="answer3" name={count}/>
                    <label for="answer3">answer 3: {incor3} </label> <br/>
                
                    <input type="radio" value="answer4" name={count}/>
                    <label for="answer4">answer 4: {cor} </label> <br/>                
                </div>
            )  
        }
    }) 

    console.log(score)
    return (
        <div>
          <h1>Questions</h1>
          
          <form onClick={formHandler}>
            {allQuestions}
            <input type="submit" value="Submit"/>
            
          </form>     
          {score}   
        </div>
    );
}




export default Quiz;
