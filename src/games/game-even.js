import runMainFlow from '..';
import { getRandom } from '../utils';

const QUESTION = 'Answer "yes" if number even otherwise answer "no".';
const ANSWER_IS_EVEN = 'yes';
const ANSWER_IS_NOT_EVEN = 'no';

const taskEvenGen = () => {
  const randomNumber = getRandom(1, 100);
  const isEven = (randomNumber % 2) === 0;
  const correctAnswer = isEven ? ANSWER_IS_EVEN : ANSWER_IS_NOT_EVEN;

  return {
    question: randomNumber,
    answer: correctAnswer,
  };
};

export default () => {
  runMainFlow(QUESTION, taskEvenGen);
};

