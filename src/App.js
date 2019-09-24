import React, { Component } from "react";
import moment from "moment";
import "./App.css";
import Timer from "./components/Timer/Timer";
import Display from "./components/Display/Display";
import TimerControls from "./components/TimerControls/TimerControls";

class App extends Component {
  state = {
    currentTime: moment.duration(25, "minutes"),
    baseTime: moment.duration(25, "minutes"),
    timer: null,
    alarm: false
  };
  increaseTimeHandler = () => {
    let newTime = this.state.currentTime.add(1, "minutes");
    this.setState({ currentTime: newTime });
  };
  decreaseTimeHandler = () => {
    let newTime = this.state.currentTime.subtract(1, "minutes");
    this.setState({ baseTime: newTime });
  };

  startTimerHandler = () => {
    this.setState({
      timer: setInterval(this.countDownHandler, 1000)
    });
  };
  pauseTimerHandler = () => {
    clearInterval(this.state.timer);
  };
  countDownHandler = () => {
    if (
      this.state.currentTime.get("hours") === 0 &&
      this.state.currentTime.get("minutes") === 0 &&
      this.state.currentTime.get("seconds") === 0
    ) {
      this.setState({
        alarm: true
      });
      this.completeTimer();
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, "seconds");
    this.setState({
      currentTime: newTime
    });
  };
  resetHandler = () => {
    clearInterval(this.state.timer);
    this.setState({ currentTime: this.state.baseTime });
  };

  completeTimer() {
    this.setState({ alarm: true });
  }
  render() {
    return (
      <div className="App">
        <h1> Pomodoro Clock</h1>
        <Display
          currentTime={this.state.currentTime}
          alert={this.completeTimer}
        />
        <Timer
          add={this.increaseTimeHandler}
          less={this.decreaseTimeHandler}
          time={this.state.currentTime}
        />
        <TimerControls
          start={this.startTimerHandler}
          stop={this.pauseTimerHandler}
          reset={this.resetHandler}
        />
      </div>
    );
  }
}

export default App;
