import { runMainFlow } from '..';
import { getRandom } from '../utils';

const progressGenBuilder = (first, step) => {
  let next = first;
  return () => {
    const result = next;
    next += step;
    return result;
  };
};

const taskProgressionGen = () => {
  const progressGen = progressGenBuilder(getRandom(0, 20), getRandom(1, 20));
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
  runMainFlow(taskProgressionGen);
};

