/**
 * initialize your data structure here.
 */
export var MinStack = function() {
  this._stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const totalLen = this._stack.length;
  this._stack.push({
    value: x,
    min: totalLen > 0 ? Math.min(this._stack[totalLen - 1].min, x) : x
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._stack.pop();
};

MinStack.prototype.topEle = function() {
  const stackLen = this._stack.length;
  if (!stackLen) {
    return null;
  }

  return this._stack[stackLen - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  const topEle = this.topEle();
  return topEle === null ? null : topEle.value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  const topEle = this.topEle();
  return topEle === null ? null : topEle.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */