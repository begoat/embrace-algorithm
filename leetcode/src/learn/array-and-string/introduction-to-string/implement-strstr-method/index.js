/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export const strStr = function(haystack, needle) {
  if (haystack === needle) {
    return 0;
  }

  let result = -1;
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    for (; j < needle.length; j++) {
      if (needle[j] !== haystack[i + j]) {
        break;
      }
    }

    if (j === needle.length) {
      result = i;
      break;
    }
  }

  return result;
};

strStr('aaa', 'aa');
