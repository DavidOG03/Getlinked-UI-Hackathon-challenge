import React, {Component} from "react";
class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const { time } = this.state;
    const hour = time.getHours();
    const min = time.getMinutes();
    const seconds = time.getSeconds();

    return (
      <div className="time">
        <div className="hour">
          {hour < 10 ? "0" : ""}{hour}
          <span className="small">H</span>
        </div>
        <div className="minutes">
          {min < 10 ? "0" : ""}
          {min}
          <span className="small">M</span>
        </div>
        <div className="seconds">
          {seconds < 10 ? "0" : ""}
          {seconds}
          <span className="small">S</span>
        </div>
      </div>
    );
  }
}
export default Clock;
