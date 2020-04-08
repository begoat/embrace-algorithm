/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagrams = function(strs) {
  let result = {};
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const getWordId = word => {
    const counter = {};
    for (let w = 0; w < word.length; w++) {
      counter[word[w]] = ((counter[word[w]] || 0) + 1);
    }
    return alphabet.reduce((accu, curr) => {
      accu += `${curr}${counter[curr] || 0}`;
      return accu;
    }, '');
  };

  strs.forEach(s => {
    const key = getWordId(s);
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(s);
  });

  let final = [];
  Object.keys(result).map(k => {
    final.push(result[k]);
  });

  return final;
};
