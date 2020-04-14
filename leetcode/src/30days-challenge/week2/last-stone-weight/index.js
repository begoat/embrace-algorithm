/**
 * @param {number[]} stones
 * @return {number}
 */
export const sortArrayDesc = arr => {
  return arr.slice().sort((a, b) => b - a);
};

export const lastStoneWeight = function(stones) {
  let sortedArray = sortArrayDesc(stones);
  while(sortedArray.length > 1) {
    const e1 = sortedArray.shift();
    const e2 = sortedArray.shift();

    if (e1 === e2) {
      continue;
    } else {
      const delta = Math.abs(e1 - e2);
      sortedArray = sortArrayDesc(sortedArray.concat([delta]));
      continue;
    }
  }

  return sortedArray[0] || 0;
};
