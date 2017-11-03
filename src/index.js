import readlineSync from 'readline-sync';
import { getRandom } from './utils.js';

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getQuestion = task => task('question');

const getAnswer = task => task('answer');

export const runMainFlow = (taskGen) => {
  let countCorrectAnswers = 0;
  const userName = greeting();

  if (!taskGen) return;
  while (countCorrectAnswers < 3) {
    const task = taskGen();
    console.log(`Question:  ${getQuestion(task)}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getAnswer(task);
    if (answer === correctAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (countCorrectAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

const taskGcdGen = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);

  const minDivide = (a, b) => {
    const min = a < b ? a : b;
    let result = 1;
    for (let q = 1; q <= min; q += 1) {
      if (a % q === 0 && b % q === 0) result = q;
    }
    return result;
  };

  const correctAnswer = minDivide(num1, num2);

  return (prop) => {
    switch (prop) {
      case 'question': {
        return `${num1} ${num2}`;
      }
      case 'answer': {
        return `${correctAnswer}`;
      }
      default: return null;
    }
  };
};

export const runBrainGcd = () => {
  runMainFlow(taskGcdGen);
};

