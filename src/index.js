import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getUsername = () => readlineSync.question('\nMay I have your name? ');
const getAnswer = () => readlineSync.question('Your answer: ');

const buildGame = (rules, makeQA) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(rules);
  const username = getUsername();
  console.log(`Hello, ${username}!\n`);

  const startRound = (roundsCount) => {
    if (roundsCount > 0) {
      const qa = makeQA();
      const question = car(qa);
      console.log(`Question: ${question}`);
      const userAnswer = getAnswer();
      const correctAnswer = String(cdr(qa));
      if (userAnswer !== correctAnswer) {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLet's try again, ${username}!`);
        return;
      }
      console.log('Correct!');
      startRound(roundsCount - 1);
    } else {
      console.log(`Congratulations, ${username}!`);
    }
  };

  const numberOfRounds = 3;
  startRound(numberOfRounds);
};

export default buildGame;
