import buildGame from '..';
import makeRandomNumber from '../random-number';

const rules = 'What is the result of the expression?';

const makeRandomOperator = () => {
  let text = '';
  const possible = '+-*';
  for (let i = 0; i < 1; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const makeCalculation = () => `${makeRandomNumber()} ${makeRandomOperator()} ${makeRandomNumber()}`;

const getCorrectAnswer = expression => String(eval(expression)); // eslint-disable-line

const startGame = () => buildGame(rules, makeCalculation, getCorrectAnswer);

export default startGame;
