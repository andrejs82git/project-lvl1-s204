import { runMainFlow } from '..';
import { getRandom } from '../utils';

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

export default () => {
  runMainFlow(taskCalcGen);
};

