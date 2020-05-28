/**
 * @param {string} s
 * @return {boolean}
 */
export var isValid = function(s) {
  function isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
  }

  const pairs = {};
  const charMapping = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ];
  charMapping.forEach(c => {
    const [c1, c2] = c;
    pairs[c1] = c2;
    pairs[c2] = c1;
  });

  if (isString(s) && !s) {
    return true;
  }

  let stack = [];
  const isEmpty = () => !stack.length;
  const getTop = () => !isEmpty() && stack[stack.length - 1];
  const popStack = () => stack.length--;
  const pushStack = ele => stack.push(ele);

  for (let i = 0; i < s.length; i++) {
    if (pairs[getTop()] === s[i]) {
      popStack();
      continue;
    } else {
      pushStack(s[i]);
    }
  }

  return !stack.length;
};