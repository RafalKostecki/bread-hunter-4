import React from 'react';
import PropTypes from 'prop-types';

import timeIcon from '../../assets/images/timeIcon.png';


let timerInterval;
let min = 0;
let sec = 0;
let msec = 0;

const time = isRunGame => {
  if (!isRunGame) {
    return;
  }

  const tmr = document.getElementById('tmr');

  timerInterval = window.setInterval(() => {
    if (msec >= 9) {
      sec += 1
      msec = 0
    }

    if (sec >= 60) {
      min += 1
      sec = 0
    }

    msec += 1;

    if (tmr) tmr.innerHTML = `${min}:${sec}:${msec}`;
  }, 100);
}


const Timer = ({ isRunGame }) => {
  clearInterval(timerInterval)

  if (isRunGame) time(isRunGame);

  return (
    <div className="item">
        <div className="item__pic">
            <img src={timeIcon} alt="timer" />
        </div>
        <div className="item__value item__value--timer">
          <span id ="tmr"> 0:0:0 </span>
        </div>
    </div>
  )
}


Timer.propTypes = {
  isRunGame: PropTypes.bool.isRequired
}



export default Timer;
