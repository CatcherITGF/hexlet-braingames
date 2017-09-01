import buildGame from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';
const makeRandomRange = () => Math.floor(Math.random() * 100) + 0;
const getCorrectAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

const startGame = () => buildGame(rules, makeRandomRange, getCorrectAnswer);

export default startGame;
