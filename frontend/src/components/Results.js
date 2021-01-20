import axios from "axios";
import React, { useEffect, useState } from "react";

const Results = () => {
  const [res, setRes] = useState([])

  const fetchData = async () => {
    const response = await axios.get('/results')
    console.log(response.data)
    setRes(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const name = res.name
  const score = res.score
  const time = res.time
  console.log(name, score, time)

  return (
    <div>
      <h1>Congratulations {name}, you got {score}/10 in {time}</h1>
      <a href="/table">Click here to view your place on our leaderboards</a>
    </div>
  );
};

export default Results;
