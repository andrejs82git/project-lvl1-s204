import { runMainFlow } from '..';
import { getRandom } from '../utils';

const taskEvenGen = () => {
  const ANSWER_IS_EVEN = 'yes';
  const ANSWER_IS_NOT_EVEN = 'no';
  const randomNumber = getRandom(1, 100);
  const isEven = (randomNumber % 2) === 0;
  const correctAnswer = isEven ? ANSWER_IS_EVEN : ANSWER_IS_NOT_EVEN;

  return {
    question: randomNumber,
    answer: correctAnswer
  };
};

export default () => {
  runMainFlow(taskEvenGen);
};

