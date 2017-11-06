import runMainFlow from '..';
import { getRandom, progressArithmeticGenBuilder as arithGenBuilder } from '../utils';

const QUESTION = 'What number is missing in this progression?';

const taskProgressionGen = () => {
  const progressGen = arithGenBuilder(getRandom(0, 20), getRandom(1, 20));
  const progression = Array.from({ length: 10 }, () => progressGen());
  const qIndex = getRandom(0, 9);
  const answer = progression[qIndex];
  progression[qIndex] = '..';

  return {
    question: `${progression.reduce((acc, x) => `${acc} ${x}`, '')}`,
    answer: `${answer}`,
  };
};

export default () => {
  runMainFlow(QUESTION, taskProgressionGen);
};

