import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import "./confetti.css";

export default () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  return (
    <div className="App">
      <div className="confetti-wrap" ref={confettiRef}>
        <Confetti
          recycle={show}
          numberOfPieces={1000}
          width={1500}
          height={1000}
          gravity={0.1}
        />
      </div>
    </div>
  );
};
