import axios from "axios";
import React, { useEffect, useState } from "react";

const Results = () => {
  // const [curScore, setcurScore] = useState({})
  // const [name, setName] = useState("")

  // const fetchData = async () => {
  //   const response = await axios.get('/results')
  //   console.log(response.data.curScore)
  //   setcurScore(response.data.curScore)

  //   setName(response.data.curScore.userid.name)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  // const score = curScore.score
  // const time = curScore.time
  // console.log(name, score, time)

  return (
    <div>
      <h1>Congratulations</h1>
      <a href="/table">Click here to view your place on our leaderboards</a>
    </div>
  );
};

export default Results;
