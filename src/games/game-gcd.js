import runMainFlow from '..';
import { getRandom } from '../utils';

const QUESTION = 'Find the greatest common divisor of given numbers.';

const minDivide = (a, b) => {
  const min = a < b ? a : b;
  let result = 1;
  for (let q = 1; q <= min; q += 1) {
    if (a % q === 0 && b % q === 0) result = q;
  }
  return result;
};

const taskGcdGen = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);

  const correctAnswer = minDivide(num1, num2);

  return {
    question: `${num1} ${num2}`,
    answer: `${correctAnswer}`,
  };
};

export default () => {
  runMainFlow(QUESTION, taskGcdGen);
};

