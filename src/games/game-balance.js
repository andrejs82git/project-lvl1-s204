import runMainFlow from '..';
import { getRandom } from '../utils';

const QUESTION = 'Balance the given number.';

const getMaxIndex = array =>
  array.reduce((iMax, n, index, arr) => (n > arr[iMax] ? index : iMax), 0);

const getMinIndex = array =>
  array.reduce((iMin, n, index, arr) => (n < arr[iMin] ? index : iMin), 0);

const isBalance = nums =>
  (nums[getMaxIndex(nums)] - nums[getMinIndex(nums)]) <= 1;

const bitBalance = (pnums) => {
  const nums = pnums;
  const indexMax = getMaxIndex(nums);
  const indexMin = getMinIndex(nums);
  nums[indexMax] -= 1;
  nums[indexMin] += 1;
};

const taskBalanceGen = () => {
  const num = getRandom(100, 9999);
  let nums = num
    .toString()
    .split('')
    .map(str => parseInt(str, 10))
    .sort();
  while (!isBalance(nums)) {
    bitBalance(nums);
  }

  nums = nums.sort();
  const ans = nums.reduce((acc, i) => acc + i, '');
  return {
    question: `${num}`,
    answer: `${ans}`,
  };
};

export default () => {
  runMainFlow(QUESTION, taskBalanceGen);
};

