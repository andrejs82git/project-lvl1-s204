import readlineSync from 'readline-sync';

const ANSWER_IS_EVEN = 'yes';
const ANSWER_IS_NOT_EVEN = 'no';

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
	return userName;
};

export const runBrainGames = () => {
  greeting();
}

const getRandom = () =>
  Math.floor(Math.random() * 100);

const isEvenNumber = num =>
  num % 2 === 0;

const getCorrectAnswer = (num) => {
  const isEven = isEvenNumber(num);
  return isEven ? ANSWER_IS_EVEN : ANSWER_IS_NOT_EVEN;
};

export const runBrainEven = () => {
  let countCorrectAnswers = 0;
  const userName = greeting();

  while (countCorrectAnswers < 3) {
    const randomNumber = getRandom();
    console.log(`Question:  ${randomNumber}`);
    const answer = readlineSync.question('Your answer (yes/no): ');
    const correctAnswer = getCorrectAnswer(randomNumber);
    if (answer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

