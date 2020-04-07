/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
  const getProfit = (total = 0, priceRegion) => {
    for (let i = 0; i < priceRegion; i++) {
      if (prices[i] <= priceRegion[i + 1]) {
        continue;
      } else {
        // return ();
      }
    }
  };

  return getProfit(0, prices);
};
