/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

function MyStack() {
  this._list = [];
}

MyStack.prototype.pop = function() {
  return this._list.pop();
};

MyStack.prototype.push = function(x) {
  return this._list.push(x);
};

MyStack.prototype.empty = function() {
  return !this._list.length;
};

MyStack.prototype.top = function() {
  return this._list[this._list.length - 1];
};

export var floodFill = function(image, sr, sc, newColor) {
  let result = [];
  const srcClr = image[sr][sc];
  const stack = new MyStack();
  // copy the origin image 2D array
  for (let i = 0; i < image.length; i++) { // row
    let tmp = [];
    for (let j = 0; j < image[i].length; j++) { // col
      tmp.push(image[i][j]);
    }

    result.push(tmp);
  }

  stack.push([sr, sc]);
  while (!stack.empty()) {
    const [topSr, topSc] = stack.pop();
    if (result[topSr][topSc] === srcClr) {
      result[topSr][topSc] = newColor;
    }

    if (topSr + 1 < result.length && result[topSr + 1][topSc] === srcClr && result[topSr + 1][topSc] !== newColor) {
      stack.push([topSr + 1, topSc]);
    }

    if (topSr - 1 >= 0 && result[topSr - 1][topSc] === srcClr && result[topSr - 1][topSc] !== newColor) {
      stack.push([topSr - 1, topSc]);
    }

    if (topSc - 1 >= 0 && result[topSr][topSc - 1] === srcClr && result[topSr][topSc - 1] !== newColor) {
      stack.push([topSr, topSc - 1]);
    }

    if (topSc + 1 < result[topSr].length && result[topSr][topSc + 1] === srcClr && result[topSr][topSc + 1] !== newColor) {
      stack.push([topSr, topSc + 1]);
    }
  }


  return result;
};