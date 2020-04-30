/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(numbers, target) {
  let left, right = 0;
  outloop:
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      }

      if (numbers[i] + numbers[j] === target) {
        left = i + 1;
        right = j + 1;
        break outloop;
      }
    }
  }

  return left < right ? [left, right] : [right, left];
};
