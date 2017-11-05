import readlineSync from 'readline-sync';

export const greeting = (question) => {
  console.log('Welcome to the Brain Games!');
  if (question) {
    console.log(question);
  }
  const userName = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getQuestion = task => task.question;

const getAnswer = task => task.answer;

export const runMainFlow = (question, taskGen) => {
  let countCorrectAnswers = 0;
  const userName = greeting(question);

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

