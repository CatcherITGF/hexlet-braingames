import { cons } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomNumber from '../random-number';

const rules = 'What is the result of the expression?';

const makeRandomOper = () => {
  const possible = '+-*';
  return possible.charAt(Math.floor(Math.random() * possible.length));
};

const makeQA = () => {
  const num1 = makeRandomNumber();
  const num2 = makeRandomNumber();
  const oper = makeRandomOper();

  const question = `${num1} ${oper} ${num2}`;
  let answer = '';

  switch (oper) {
    case '+': answer = num1 + num2; break;
    case '-' : answer = num1 - num2; break;
    case '*' : answer = num1 * num2; break;
    default: answer = null;
  }

  return cons(question, answer);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
