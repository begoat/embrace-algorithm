/**
 * @param {number[]} T
 * @return {number[]}
 */
export var dailyTemperatures = function(T) {
  let result = Array.from({ length: T.length });
  for (let i = T.length - 1; i >= 0; i--) {
    if (i === T.length - 1) {
      result[i] = 0;
    }

    let tmp = 0;
    for (let j = i; j < T.length; j++) {
      if (T[j] > T[i]) {
        tmp = j - i;
        break;
      }
    }
    result[i] = tmp;
  }

  return result;
};