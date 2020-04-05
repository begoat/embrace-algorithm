/**
 * @param {number} n
 * @return {boolean}
 */
export const isHappy = function(n) {
  // let mem = {};
  const checkIsHappy = (n, callStack) => {
    if (callStack.indexOf(n) !== -1) {
      return false; // 循环了
    }

    const digits = String(n).split('');
    if (isNaN(n) || !digits.length || n < 0) {
      return false;
    }

    const resultOnce = digits.reduce((accu, curr) => {
      accu += Math.pow(Number(curr), 2);
      return accu;
    }, 0);

    if (resultOnce !== 1) {
      // mem[n] = false;
      return checkIsHappy(resultOnce, callStack.concat([n]));
    } else {
      return true;
    }
  };

  return checkIsHappy(n, []);
};
