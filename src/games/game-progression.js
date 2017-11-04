import { runMainFlow } from '..';
import { getRandom } from '../utils';

function* progressGenBuilder(first, step) {
  let next = first;
  while (true) {
    yield next;
    next += step;
  }
}

const taskProgressionGen = () => {
  const progressGen = progressGenBuilder(getRandom(0, 20), getRandom(1, 20));
  const progression = Array.from({ length: 10 }, () => progressGen.next().value);
  const qIndex = getRandom(0, 10);
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

