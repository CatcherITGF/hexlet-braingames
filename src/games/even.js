import buildGame from '..';
import makeRandomNumber from '../random-number';

const rules = 'Answer "yes" if number even otherwise answer "no".';
const getCorrectAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

const startGame = () => buildGame(rules, makeRandomNumber, getCorrectAnswer);

export default startGame;
