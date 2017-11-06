import readlineSync from 'readline-sync';

const COUNT_TASK = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const userName = readlineSync.question('\nMay I have your name?: ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const getQuestion = task => task.question;

const getAnswer = task => task.answer;

const runMainFlow = (question, taskGen) => {
  let countCorrectAnswers = 0;

  greeting();
  if (question) console.log(question);
  const userName = askName();

  if (!taskGen) return;
  while (countCorrectAnswers < COUNT_TASK) {
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
export default runMainFlow;
