import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class TriviaQuestions extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      answers: [],
      category: '',
      question: '',
      correct: '',
      redirect: false,
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    const fetchQuestion = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const responseQuestions = await fetchQuestion.json();
    const { counter } = this.state;
    const LAST_QUESTION = 5;
    if (Number(counter) === Number(LAST_QUESTION)) {
      this.setState({ redirect: true });
    }
    const {
      category,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = responseQuestions.results[counter];

    this.setState({
      category,
      question,
      correct: correctAnswer,
      answers: [...incorrectAnswers, correctAnswer] });
  }

  answerClick = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }),
      () => this.componentDidMount());
  }

  render() {
    const { apiData } = this.props;
    const { category, question, answers, correct, redirect } = this.state;
    const RANDOMIZE_NUMBER = 0.5;
    return (
      <section>
        { apiData
        && (
          <div>
            <h4
              data-testid="question-category"
            >
              {category}

            </h4>
            <p data-testid="question-text">{question}</p>
            <div data-testid="answer-options">
              {answers.map((item, index) => (
                <button
                  type="button"
                  key={ index }
                  data-testid={
                    correct === item ? 'correct-answer' : `wrong-answer-${index}`
                  }
                >
                  { item }
                </button>
              )).sort(() => Math.random() - RANDOMIZE_NUMBER)}
            </div>
            <button
              type="button"
              onClick={ this.answerClick }
              data-testid="btn-next"
            >
              Next
            </button>
            { redirect && <Redirect to="/feedback" /> }
          </div>)}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  apiData: state.player.API,
});

TriviaQuestions.propTypes = {
  apiData: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(TriviaQuestions);
