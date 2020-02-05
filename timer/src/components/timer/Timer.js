import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState(state => ({counter: state.counter + 1})) , 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render () {
    return (
      <div data-testid="timer">
        {this.state.counter}
      </div>
    );
  }
}

export default Timer;

