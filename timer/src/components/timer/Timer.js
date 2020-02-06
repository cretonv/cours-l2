import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.pause = false
  }

  componentDidMount() {
    this.interval = setInterval(() => {if(!this.pause){this.setState(state => ({counter: state.counter + 1}))}} , 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render () {
    return (
      <div data-testid="timer">
        <span data-testid="timerValue">{this.state.counter}</span>
        <br/>
        <button id={"pauseButton"} data-testid="pauseButton" onClick={() => {this.pause ? this.pause = false : this.pause = true; this.pause ? document.querySelector('#pauseButton').innerHTML = 'Reprendre le timer' : document.querySelector('#pauseButton').innerHTML = 'Mettre le timer en pause'; console.log(this.pause)} }>
          Mettre le timer en pause
        </button>
      </div>
    );
  }
}

export default Timer;

