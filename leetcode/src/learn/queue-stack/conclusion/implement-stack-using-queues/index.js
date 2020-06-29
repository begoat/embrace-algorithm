/**
 * Initialize your data structure here.
 */
export var MyStack = function() {
  this._list = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this._list.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const result = this.top();
  this._list.length--;
  return result;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  const result = this._list[this._list.length - 1];
  return result;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this._list.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */