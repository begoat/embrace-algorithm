/**
 * @param {string} s
 * @return {string}
 */
export const reverseWords = function(s) {
  const reverseStringSlice = (str, i, j) => {
    let tmp = [];
    for (let curr = j - 1; curr >= i; curr--) {
      tmp.push(str[curr]);
    }

    return tmp.join('');
  };

  let result = [];
  let start = null;
  for (let i = 0; i < s.length; i++) {
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
        result.push(reverseStringSlice(s, start, i));
        start = null;
      }
    }
  }

  if (start !== null) {
    result.push(reverseStringSlice(s, start, s.length));
  }

  return result.join(' ');
};
