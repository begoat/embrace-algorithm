/**
 * @param {number[]} n
 * @return {boolean}
 */
export const sortedSquares = function(n) {
  for (let i = 0; i < n.length; i++) {
    n[i] = Math.pow(n[i], 2);
  }

  const swapEle = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };

  for (let i = 1; i < n.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (n[j] < n[j - 1]) {
        swapEle(n, j, j - 1);
      }
    }
  }

  return n;
};

sortedSquares([-2,-1,3]);
