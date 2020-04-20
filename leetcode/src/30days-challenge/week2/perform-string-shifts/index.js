/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
export const stringShift = function(s, shift) {
  let shiftNum = 0;
  for (let i = 0; i < shift.length; i++) {
    const [direction, amount] = shift[i];
    if (direction === 0) {
      shiftNum -= amount;
    } else if (direction === 1) {
      shiftNum += amount;
    }
  }

  let sArray = s.split('');
  if (shiftNum < 0) { // left shift
    for (let i = shiftNum; i < 0; i++) {
      let l = sArray.shift();
      sArray.push(l);
    }
  } else if (shiftNum > 0) {
    for (let i = shiftNum; i > 0; i--) {
      let r = sArray.pop();
      sArray.unshift(r);
    }
  }

  return sArray.join('');
};
