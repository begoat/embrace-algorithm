/**
 * @param {number[]} digits
 * @return {number[]}
 */
export const plusOne = function(digits) {
  let carryNum = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    const result = digits[i] + (i === digits.length - 1 ? 1 : 0) + carryNum;
    carryNum = result >= 10 ? 1 : 0;
    digits[i] = result % 10;
  }

  if (carryNum === 1) {
    digits.unshift(1);
  }

  return digits;
};
