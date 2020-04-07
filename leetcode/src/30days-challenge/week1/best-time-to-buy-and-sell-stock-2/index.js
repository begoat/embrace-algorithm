/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
  let results = 0;
  let leftBoundary, rightBoundary;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] <= prices[i + 1]) {
      if (leftBoundary == undefined) {
        leftBoundary = i;
      }

      if (i === prices.length - 2) {
        results += (prices[i + 1] - prices[leftBoundary]);
        break;
      }
    } else {
      if (leftBoundary !== undefined) {
        rightBoundary = i;
        results += prices[rightBoundary] - prices[leftBoundary];
        leftBoundary = undefined;
      }
    }
  }

  return results;
};
