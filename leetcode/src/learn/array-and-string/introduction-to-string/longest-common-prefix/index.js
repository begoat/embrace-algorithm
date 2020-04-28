/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return '';
  }

  let i = 0;
  loopOut:
  for (i = 0; i < strs[0].length; i++) {
    let curr = strs[0][i];
    for (let s of strs) {
      if (s[i] !== curr) {
        break loopOut;
      }
    }
  }

  return strs[0].slice(0, i);
};

longestCommonPrefix(['']);
