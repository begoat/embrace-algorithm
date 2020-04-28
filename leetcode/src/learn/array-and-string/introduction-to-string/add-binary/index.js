/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addBinary = function(a, b) {
  const aArray = a.split('');
  const bArray = b.split('');
  const maxLen = aArray.length > bArray.length ? aArray.length : bArray.length;
  for (let i = aArray.length; i < maxLen; i++) {
    aArray.unshift('0');
  }

  for (let i = bArray.length; i < maxLen; i++) {
    bArray.unshift('0');
  }


  let carryNum = 0;
  let result = [];
  for (let i = maxLen - 1; i >= 0; i--) {
    const temp = Number(aArray[i]) + Number(bArray[i]) + carryNum;
    carryNum = Math.floor(temp / 2);
    result.unshift(temp % 2);
  }

  if (carryNum === 1) {
    result.unshift(1);
  }

  return result.join('');
};
