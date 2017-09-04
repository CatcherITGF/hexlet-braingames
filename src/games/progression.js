import { cons, car, cdr } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomInt from '../random-integer';

const rules = 'What number is missing in this progression?';

let result1 = '';
let result2 = '';

const getN = (n, a, d) => a + (n - 1) * d;

const makeProgression = (a, d) => {
  for (let i = 0; i < 10; i += 1) {
    const buildString = getN(i, a, d);
    if (i === 5) {
      result1 += '.. ';
      result2 = buildString;
    } else {
      result1 += `${buildString} `;
    }
  }
};

const makeQA = () => {
  const member = makeRandomInt(1, 10);
  const diff = makeRandomInt(1, 10);
  const qa = makeProgression(member, diff);

  const question = result1;
  const answer = result2;

  return cons(question, answer);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
