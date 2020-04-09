/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
export const backspaceCompare = function(S, T) {
  const calcByStr = sss => {
    let result = [];
    for (let i = 0; i < sss.length; i++) {
      const char = sss[i];
      if (char !== '#') {
        result.push(char);
      } else {
        result.pop();
      }
    }

    return result;
  };

  const r1 = calcByStr(S);
  const r2 = calcByStr(T);
  if (r1.length !== r2.length) {
    return false;
  }

  for (let i = 0 ; i < r1.length; i++) {
    if (r1[i] !== r2[i]) {
      return false;
    }
  }

  return true;
};
