/**
 * @param {number} n
 * @return {boolean}
 */
export const replaceElements = function(n) {
  for (let i = 0; i < n.length; i++) {
    let max = - Infinity;
    for (let j = i + 1; j < n.length; j++) {
      if (n[j] > max) {
        max = n[j];
      }
    }

    if (i !== n.length - 1) {
      n[i] = max;
    } else {
      n[i] = -1;
    }
  }

  return n;
};
