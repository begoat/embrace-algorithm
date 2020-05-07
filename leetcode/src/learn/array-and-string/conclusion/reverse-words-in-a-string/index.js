/**
 * @param {string} s
 * @return {string}
 */
export const reverseWords = function(s) {
  let result = [];
  let start = null;
  for (let i = s.length - 1; i >= 0; i--) {
    if (start === null) {
      if (s[i] !== ' ') {
        start = i;
      } else {
        //
      }
    } else {
      if (s[i] !== ' ') {
        //
      } else {
        result.push(s.slice(i + 1, start + 1));
        start = null;
      }
    }
  }

  if (start !== null) {
    result.push(s.slice(0, start + 1));
  }

  return result.join(' ');
};
