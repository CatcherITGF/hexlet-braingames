import { cons } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomInt from '../random-integer';

const rules = 'What number is missing in this progression?';

const getN = (n, a, d) => a + ((n - 1) * d);

const makeProgression = (a, d, hide) => {
  let question = '';
  let answer = '';
  for (let i = 1; i <= 10; i += 1) {
    const buildString = getN(i, a, d);
    if (i === hide) {
      question += '.. ';
      answer = buildString;
    } else {
      question += `${buildString} `;
    }
  }
  question = question.slice(0, -1);
  return cons(question, answer);
};

const makeQA = () => {
  const member = makeRandomInt(1, 10);
  const diff = makeRandomInt(1, 10);
  const hide = makeRandomInt(3, 8);

  return makeProgression(member, diff, hide);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
