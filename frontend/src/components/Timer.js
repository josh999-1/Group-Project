import { Component } from "react";
import "./quiz.css";

let urTime

const React = require("react");
const ms = require("pretty-ms");
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0,
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time,
    });
    this.props.handleClick();
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start,
        }),
      1
    );
  }
  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ time: 0, isOn: false });
    this.props.handleClick();
  }
  render() {
    let start =
      this.state.time == 0 ? (
        <button onClick={this.startTimer} className="start">
          Start
        </button>
      ) : null;
    let stop =
      this.state.time == 0 || !this.state.isOn ? null : (
        <button onClick={this.stopTimer}>stop</button>
      );
    let resume =
      this.state.time == 0 || this.state.isOn ? null : (
        <button onClick={this.startTimer}>resume</button>
      );
    let reset =
      this.state.time == 0 || this.state.isOn ? null : (
        <button onClick={this.resetTimer}>reset</button>
      );
    urTime = ms(this.state.time)
    
    return (
      <div>
        <h3>Timer: {ms(this.state.time)}</h3>
        {start}
        {resume}
        {stop}
        {reset}
        {/* <p>Your time {ms(this.state.time)}</p> */}
      </div>
    );
  }
}


export {urTime}
export default Timer;

export class start extends Component {
  start;
}
