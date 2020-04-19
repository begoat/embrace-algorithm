/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
// 状态机
export const numWays = function(n, relation, k) {
  const targetIdx = n - 1; // use k round to passs to n-1 idx
  let relationMap = {};
  for (let i = 0; i < relation.length; i++) {
    const [fromIdx, toIdx] = relation[i];
    if (!relationMap[fromIdx]) {
      relationMap[fromIdx] = [];
    }

    if (relationMap[fromIdx].indexOf(toIdx) === -1) {
      relationMap[fromIdx].push(toIdx);
    }
  }

  console.log('relationMap', relationMap);

  const calcResult = (mapper, startIdx, roundNum) => {
    if (roundNum === 0) {
      if (targetIdx === startIdx) {
        return 1;
      } else {
        return 0;
      }
    }

    if (!mapper[startIdx] || !mapper[startIdx] || roundNum < 0) {
      return 0;
    }

    return mapper[startIdx].reduce((accu, curr) => {
      accu += calcResult(mapper, curr, roundNum - 1);
      return accu;
    }, 0);
  };

  return calcResult(relationMap, 0, k);
};
