const getRandom = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;

const progressArifmGenBuilder = (first, step) => {
  let next = first;
  return () => {
    const result = next;
    next += step;
    return result;
  };
};

export { progressArifmGenBuilder, getRandom };
