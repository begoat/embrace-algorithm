/**
 * @param {number} n
 * @return {number}
 */
export var numSquares = function(n) {
  const getMinNumSquares = posNum => {
    let result = posNum;
    const maxBaseSquare = Math.floor(Math.sqrt(posNum));
    if (Math.pow(maxBaseSquare, 2) === posNum) {
      return 1;
    }

    for (let i = maxBaseSquare; i > 0; i--) {
      result = Math.min(
        result,
        getMinNumSquares(Math.pow(maxBaseSquare, 2)) + getMinNumSquares(posNum - Math.pow(maxBaseSquare, 2))
      );

    }

    return result;
  };

  return getMinNumSquares(n);
};
