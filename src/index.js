import readlineSync from 'readline-sync';

const getUsername = () => readlineSync.question('\nMay I have your name? ');
const getAnswer = () => readlineSync.question('Your answer: ');

const buildGame = (rules, askQuestion, getCorrectAnswer, numberOfRounds) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(rules);
  const username = getUsername();
  console.log(`Hello, ${username}!\n`);

  const startRound = (roundsCount) => {
    if (roundsCount > 0) {
      const question = askQuestion();
      console.log(`Question: ${question}`);
      const userAnswer = getAnswer();
      const correctAnswer = getCorrectAnswer(question);
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

  startRound(numberOfRounds);
};

export default buildGame;
