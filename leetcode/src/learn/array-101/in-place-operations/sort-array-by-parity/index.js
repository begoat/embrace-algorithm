/**
 * @param {number[]} n
 * @return {boolean}
 */
export const sortArrayByParity = function(n) {
  if (!n.length) {
    return [];
  }

  const moveEleToEnd = (array, targetIdx) => {
    let tmp = array[targetIdx];
    for (let ii = targetIdx; ii < array.length - 1; ii++) {
      array[ii] = array[ii + 1];
    }

    array[array.length - 1] = tmp;
  };

  let j = n.length - 1;
  let i = 0;
  while(i < j) {
    if (n[i] % 2) { // odd
      moveEleToEnd(n, i);
      j--;
    } else {
      i++;
    }
  }

  console.log('n', n);
  return n.reduce((accu, curr) => accu + curr);
};
