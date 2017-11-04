import { runMainFlow } from '..';
import { getRandom } from '../utils';

const isBalance = (nums) => {
  for (let i = 0; i < nums.length - 1; i += 1) {
    const n1 = nums[i];
    const n2 = nums[i + 1];
    if ((n2 - n1) > 1) {
      return false;
    }
  }
  return true;
};

const getMax = array =>
  array.reduce((iMax, n, index, arr) => (n > arr[iMax] ? index : iMax), 0);

const getMin = array =>
  array.reduce((iMin, n, index, arr) => (n < arr[iMin] ? index : iMin), 0);

const bitBalance = (pnums) => {
  const nums = pnums;
  const indexMax = getMax(nums);
  const indexMin = getMin(nums);
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
  runMainFlow(taskBalanceGen);
};

