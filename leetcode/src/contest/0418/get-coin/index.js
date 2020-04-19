/**
 * @param {number[]} coins
 * @return {number}
 */
export const minCount = function(coins) {
  let result = 0;
  for (let i = 0; i < coins.length; i++) {
    result += Math.ceil(coins[i] / 2);
  }

  return result;
};
