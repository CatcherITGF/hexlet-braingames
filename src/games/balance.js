import { cons } from 'hexlet-pairs';
import buildGame from '..';
import makeRandomInt from '../random-integer';

const rules = 'Balance the given number.';

const balanceNumber = (strNum) => {
  const strNumLength = strNum.length - 1;
  const doSort = str => str.split('').sort().join('');
  const getMin = str => Number(doSort(str)[0]);
  const getMax = str => Number(doSort(str)[strNumLength]);
  const isBalanced = str => ((getMax(str) - getMin(str)) <= 1) && (doSort(str) === str);

  const incFirstDecLast = (str) => {
    const incFirst = Number(str[0]) + 1;
    const middle = str.substring(1, strNumLength);
    const decLast = Number(str[strNumLength]) - 1;
    return `${incFirst}${middle}${decLast}`;
  };

  const getResult = (str) => {
    if (isBalanced(str)) {
      return str;
    }
    return getResult(doSort(incFirstDecLast(str)));
  };

  return getResult(strNum);
};

const makeQA = () => {
  const question = makeRandomInt(100, 9999);
  const answer = balanceNumber(String(question));

  return cons(question, answer);
};

const startGame = () => buildGame(rules, makeQA);

export default startGame;
