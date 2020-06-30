/**
 * @param {string} s
 * @return {string}
 */

function MyStack() {
  this._list = [];
};

MyStack.prototype.push = function(x) {
  this._list.push(x);
};

MyStack.prototype.pop = function() {
  return this._list.pop();
};

MyStack.prototype.empty = function() {
  return !this._list.length;
};

MyStack.prototype.top = function() {
  return this._list[this._list.length - 1];
};

MyStack.prototype.join = function() {
  return this._list.join('');
};

export var decodeString = function(s) {
  const stack = new MyStack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i]);
    } else {
      let tmp = [];
      let nums = [];
      while (stack.top() !== '[') {
        tmp.unshift(stack.pop());
      }

      stack.pop(); // '[' pop it

      while (parseInt(stack.top(), 10) >= 0 && parseInt(stack.top(), 10) <= 9) {
        nums.unshift(stack.pop());
      }

      for (let t = 0; t < parseInt(nums.join(''), 10); t++) {
        for (let i = 0; i < tmp.length; i++) {
          stack.push(tmp[i]);
        }
      }
    }
  }


  return stack.join();
};
