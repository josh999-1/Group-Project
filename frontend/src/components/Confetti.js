import Confetti from "react-dom-confetti";
import { useState, Component } from "react";

const MakeConfetti = () => {
  const [showCon, setCon] = useState(false);
  const confettiClick = () => setCon(!showCon);
  const config = {
    angle: 90,
    spread: "237",
    startVelocity: 40,
    elementCount: "200",
    dragFriction: 0.12,
    duration: "5440",
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };
  return <Confetti confettiClick={showCon} config={config} />;
};

export class confettiClick extends Component {
  confettiClick;
}

export default MakeConfetti;
