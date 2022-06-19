import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTimer, quantifyTimer } from '../redux/actions';

let timerCounter;

class Countdown extends Component {
  constructor() {
    super();

    this.state = {
      secondsLeft: 30,
    };
  }

  componentDidMount() {
    const { secondsLeft } = this.state;
    if (secondsLeft > 0) {
      this.handleTimer();
    }
  }

  componentDidUpdate() {
    const { secondsLeft } = this.state;
    const { setTimerTrue, trueTimer, valueTimer } = this.props;
    const SET_TIMER = 30;
    if (secondsLeft < SET_TIMER) {
      valueTimer(secondsLeft);
    } else if (setTimerTrue === true) {
      this.resetTimer();
      trueTimer(false);
    }
    if (secondsLeft > 0 && trueTimer === false) {
      this.handleTimer();
      clearInterval(timerCounter);
    }
  }

  handleTimer = () => {
    const ONE_SECOND = 1000;
    timerCounter = setInterval(() => {
      this.setState((prevState) => ({
        secondsLeft: prevState.secondsLeft - 1,
      }));
    }, ONE_SECOND);
  }

  resetTimer = () => {
    this.setState({ secondsLeft: 30 });
  }

  render() {
    const { secondsLeft } = this.state;
    return (
      <div>
        <span>{ secondsLeft }</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  setTimerTrue: state.player.timer,
});

const mapDispatchToProps = (dispatch) => ({
  trueTimer: (bool) => dispatch(setTimer(bool)),
  valueTimer: (time) => dispatch(quantifyTimer(time)),
});

Countdown.propTypes = {
  setTimerTrue: PropTypes.bool.isRequired,
  trueTimer: PropTypes.func.isRequired,
  valueTimer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
