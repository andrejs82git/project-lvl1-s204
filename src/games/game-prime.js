import runMainFlow from '..';
import { getRandom } from '../utils';

const QUESTION = 'Please answer "yes" if number is prime or "no" otherwise.';
const ANSWER_IS_PRIME = 'yes';
const ANSWER_IS_NOT_PRIME = 'no';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const taskProgressionGen = () => {
  const num = getRandom(1, 100);

  return {
    question: `${num}`,
    answer: `${isPrime(num) ? ANSWER_IS_PRIME : ANSWER_IS_NOT_PRIME}`,
  };
};

export default () => {
  runMainFlow(QUESTION, taskProgressionGen);
};

