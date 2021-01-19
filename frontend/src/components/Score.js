import React, { useEffect, useState } from "react";
import axios from "axios";


const Score = () => {
    
    const [score, setScore ] = useState("");
    const [time, setTime ] = useState("");
    const [backendResponse, setBackendResponse] = useState("")
    

    const formHandler = async (event) => {
        event.preventDefault();      
        console.log(score)
        console.log(time)

        const body = {        
            userScore: score,
            userTime: time
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }


        const response = await axios.post('/score', body, config)       
        setBackendResponse(response.data.message)

    }

        return (

            <div>
                <h1>reg user</h1>

                <form onSubmit={formHandler} >

                    {/* <label>user name</label>
                    <input type="text" name="userName"  onChange={(e) => setName(e.target.value)}  /><br/> */}

                    <label>score</label>
                    <input type="text" name="userScore"  onChange={(e) => setScore(e.target.value)} /><br/>

                    <label>time</label>
                    <input type="text" name="userTime"  onChange={(e) => setTime(e.target.value)}/><br/>

                    <button type="submit" >submit score</button>

                </form>

                {backendResponse}

            </div>
        )

}

export default Score;