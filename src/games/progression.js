import { cons, car, cdr } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomInt from '../random-integer';

const rules = 'What number is missing in this progression?';

const wrapProgression = (a, b, c) => {
  const makeProgression = (member, diff, hide, stop, step, result, answer) => {
    if (step === stop) {
      return cons(`${result}${member}`, answer);
    }
    return makeProgression(member + diff, diff, hide, stop, step + 1, step === hide ? `${result}.. ` : `${result}${member} `, step === hide ? member : answer);
  };

  return makeProgression(a, b, c, 10, 1, '', null);
};

const makeQA = () => {
  const member = makeRandomInt(1, 10);
  const diff = makeRandomInt(1, 10);
  const hide = makeRandomInt(3, 8);
  const progression = wrapProgression(member, diff, hide);
  const question = car(progression);
  const answer = cdr(progression);

  return cons(question, answer);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
