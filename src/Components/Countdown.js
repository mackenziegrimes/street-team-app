import React from 'react';

const Countdown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [time, setTime] = React.useState({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds),
  });

  const tick = () => {
    if (paused || over) return;
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
      setOver(true);
    else if (time.minutes === 0 && time.seconds === 0) {
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59,
      });
    } else if (time.seconds === 0) {
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59,
      });
    } else {
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
    }
  };

  const reset = () => {
    setTime({
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds),
    });
    setPaused(false);
    setOver(false);
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

      // <h1>
      //   {`${time.hours
      //     .toString()
      //     .padStart(2, '0')}:${time.minutes
      //     .toString()
      //     .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}
      // </h1>

  return (
    <div>
      <h5 className="fade-light"> Contest Ends In </h5>
      
      <div className="countdown-container shrink-width">
        <h1 class="deadline-number">
          {`${time.hours
            .toString()
            .padStart(2, '0')}`}
        </h1>
        <h1 class="deadline-number">
          {`${time.minutes
            .toString()
            .padStart(2, '0')}`}
        </h1>
        <h1 class="deadline-number">
          {`${time.seconds
            .toString()
            .padStart(2, '0')}`}
        </h1>
      </div>
      
      <div>{over ? "Time's up!" : ''}</div>
    </div>
  );
};

export default Countdown;
