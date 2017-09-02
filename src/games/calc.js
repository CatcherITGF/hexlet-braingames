import { cons } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomInt from '../random-integer';

const rules = 'What is the result of the expression?';

const makeRandomOper = () => {
  const possible = '+-*';
  return possible.charAt(Math.floor(Math.random() * possible.length));
};

const makeQA = () => {
  const num1 = makeRandomInt(1, 99);
  const num2 = makeRandomInt(1, 99);
  const oper = makeRandomOper();

  const question = `${num1} ${oper} ${num2}`;
  let answer = null;

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
