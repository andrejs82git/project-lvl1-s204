import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandom = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

const getQuestion = task => task('question');

const getAnswer = task => task('answer');

const runMainFlow = (taskGen) => {
  let countCorrectAnswers = 0;
  const userName = greeting();

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
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const taskEvenGen = () => {
  const ANSWER_IS_EVEN = 'yes';
  const ANSWER_IS_NOT_EVEN = 'no';
  const randomNumber = getRandom(1, 100);
  const isEven = (randomNumber % 2) === 0;
  const correctAnswer = isEven ? ANSWER_IS_EVEN : ANSWER_IS_NOT_EVEN;

  return (prop) => {
    switch (prop) {
      case 'question': {
        return randomNumber;
      }
      case 'answer': {
        return correctAnswer;
      }
      default: return null;
    }
  };
};

const taskCalcGen = () => {
  const operations = [
    { name: '+', answer: (a, b) => a + b },
    { name: '-', answer: (a, b) => a - b },
    { name: '*', answer: (a, b) => a * b },
  ];
  const op = operations[getRandom(0, 2)];
  const num1 = getRandom(0, 10);
  const num2 = getRandom(0, 10);

  const correctAnswer = op.answer(num1, num2);

  return (prop) => {
    switch (prop) {
      case 'question': {
        return `${num1} ${op.name} ${num2}`;
      }
      case 'answer': {
        return `${correctAnswer}`;
      }
      default: return null;
    }
  };
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

export const runBrainGames = () => {
  greeting();
};

export const runBrainEven = () => {
  runMainFlow(taskEvenGen);
};

export const runBrainCalc = () => {
  runMainFlow(taskCalcGen);
};

export const runBrainGcd = () => {
  runMainFlow(taskGcdGen);
};

