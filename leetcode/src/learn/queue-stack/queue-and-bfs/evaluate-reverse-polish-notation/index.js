/**
 * @param {string[]} tokens
 * @return {number}
 */
export var evalRPN = function(tokens) {
  const operatorList = ['*', '+', '-', '/'];
  function isOperator(ele) {
    return operatorList.indexOf(ele) !== -1;
  }

  function operateT1AndT2(t1, t2, op) {
    switch(op) {
      case '*':
        return t1 * t2;
      case '+':
        return t1 + t2;
      case '-':
        return t1 - t2;
      case '/':
        return Math.trunc(t1 / t2);
    }
  }

  function Mystack() {
    this.stack = [];
  }

  Mystack.prototype.popEle = function() {
    const result = this.stack[this.stack.length - 1];
    this.stack.length--;
    return result;
  };

  Mystack.prototype.pushEle = function(ele) {
    this.stack.push(ele);
  };

  Mystack.prototype.getTop = function() {
    return this.stack[this.stack.length - 1];
  };

  const myStack = new Mystack();
  for (let i = 0; i < tokens.length; i++) {
    const curr = tokens[i];
    if (isOperator(curr)) {
      const t2 = Number(myStack.popEle());
      const t1 = Number(myStack.popEle());
      myStack.pushEle(operateT1AndT2(t1, t2, curr));
    } else {
      myStack.pushEle(curr);
    }
  }

  return myStack.getTop();
};