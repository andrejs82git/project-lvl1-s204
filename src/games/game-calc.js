import { runMainFlow } from '..';
import { getRandom } from '../utils';

const QUESTION = 'What is the result of the expression?';

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

  return {
    question: `${num1} ${op.name} ${num2}`,
    answer: `${correctAnswer}`,
  };
};

export default () => {
  runMainFlow(QUESTION, taskCalcGen);
};

