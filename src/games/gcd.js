import { cons } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomInt from '../random-integer';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const makeQA = () => {
  const num1 = makeRandomInt();
  const num2 = makeRandomInt();

  const question = `${num1}, ${num2}`;
  const answer = gcd(num1, num2);

  return cons(question, answer);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
