/**
 * @param {number} n
 * @return {number}
 */
export var numSquares = function(n) {
  let storage = {};
  const getMinNumSquares = posNum => {
    if (storage[posNum]) {
      return storage[posNum];
    }

    let result = posNum;
    const maxBaseSquare = Math.floor(Math.sqrt(posNum));
    if (Math.pow(maxBaseSquare, 2) === posNum) {
      return 1;
    }

    for (let i = maxBaseSquare; i > 0; i--) {
      result = Math.min(
        result,
        1 + getMinNumSquares(posNum - Math.pow(i, 2))
      );
    }

    storage[posNum] = result;
    return result;
  };

  return getMinNumSquares(n);
};

console.log(numSquares(66));
