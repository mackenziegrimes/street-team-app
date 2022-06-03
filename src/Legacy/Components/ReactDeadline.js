import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.countDownId = null;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expired: false
    };
  }

  componentDidMount() {
    this.countDownId = setInterval(this.timerInit, 1000);
  }

  componentWillUnmount() {
    if (this.countDownId) {
      clearInterval(this.countDownId);
    }
  }

  timerInit = () => {
    const { startDate } = this.props;
    console.log(startDate);
    const now = new Date().getTime();
    if (!startDate) {
      this.setState({ expired: true });
      return;
    }
    const countDownStartDate = new Date(startDate).getTime();
    const distance = countDownStartDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // For countdown is finished
    if (distance < 0) {
      clearInterval(this.countDownId);
      this.setState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      });
      return;
    }
    this.setState({ days, hours, minutes, seconds, expired: false });
  };

  render() {
    const { days, hours, minutes, seconds, expired } = this.state;
    if (expired) {
      return ( <div className="countdown-container">
                  <div class="countdown-column">
                    <h1 class="countdown-number"> Expired :( </h1>
                  </div>
                </div>
              )
    }
    return (
    <div>
      <div className="countdown-container">
        <div className="countdown-column">
            <h1 className="countdown-number"> {days} </h1>
            <h5 className="fade-light countdown-label">Days</h5>
        </div>
        <div className="countdown-column">
            <h1 className="countdown-number"> {hours} </h1>
            <h5 className="fade-light countdown-label">Hours</h5>
        </div>
        <div className="countdown-column">
            <h1 className="countdown-number"> {minutes} </h1>
            <h5 className="fade-light countdown-label">Minutes</h5>
        </div>
        <div className="countdown-column">
            <h1 className="countdown-number"> {seconds} </h1>
            <h5 className="fade-light countdown-label">Seconds</h5>
        </div>
      </div>
     </div>
    );
  }
}
export default Timer;