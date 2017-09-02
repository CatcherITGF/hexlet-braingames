import { cons } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomInt from '../random-integer';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const isEvenOrOdd = num => (num % 2 === 0 ? 'yes' : 'no');

const makeQA = () => {
  const question = makeRandomInt(1, 99);
  const answer = isEvenOrOdd(question);

  return cons(question, answer);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
