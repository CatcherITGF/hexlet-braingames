import { cons } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomNumber from '../random-number';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const isEvenOrOdd = num => (num % 2 === 0 ? 'yes' : 'no');

const makeQA = () => {
  const question = makeRandomNumber();
  const answer = isEvenOrOdd(question);

  return cons(question, answer);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
