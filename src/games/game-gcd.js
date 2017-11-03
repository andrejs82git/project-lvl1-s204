import { runMainFlow } from '../index.js';
import { getRandom } from '../utils.js';

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

export default () => {
  runMainFlow(taskGcdGen);
};

