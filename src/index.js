import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getQuestion = task => task.question;

const getAnswer = task => task.answer;

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

