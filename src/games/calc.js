import { cons } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomInt from '../random-integer';

const rules = 'What is the result of the expression?';

const makeRandomOper = () => {
  const possible = '+-*';
  return possible.charAt(Math.floor(Math.random() * possible.length));
};

const makeQA = () => {
  const num1 = makeRandomInt();
  const num2 = makeRandomInt();
  const oper = makeRandomOper();

  const question = `${num1} ${oper} ${num2}`;
  let answer = '';

  switch (oper) {
    case '+': answer = num1 + num2; break;
    case '-' : answer = num1 - num2; break;
    case '*' : answer = num1 * num2; break;
    default: answer = '';
  }

  return cons(question, answer);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
