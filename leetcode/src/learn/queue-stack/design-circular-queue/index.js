/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
export var MyCircularQueue = function(k) {
  this.listStorage = Array.from({length: k});
  this.fixedNum = k;
  this.pFirst = -1;
  this.pLast = -1;
  this.eleNum = 0;
};

MyCircularQueue.prototype.calcIdx = function(targetidx) {
  return targetidx % this.fixedNum;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isEmpty()) {
    this.pFirst = 0;
    this.pLast = 0;
    this.listStorage[this.pFirst] = value;
    this.eleNum++;
    return true;
  } else if (this.isFull()) {
    return false;
  } else {
    this.pLast = this.calcIdx(this.pLast + 1);
    this.listStorage[this.pLast] = value;
    this.eleNum++;
    return true;
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false;
  } else {
    this.pFirst = this.calcIdx(this.pFirst + 1);
    this.eleNum--;
    return true;
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
    return -1;
  }

  return this.listStorage[this.pFirst];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
    return -1;
  }

  return this.listStorage[this.pLast];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  if ((this.pLast === -1 && this.pFirst === -1)) {
    return true;
  }

  if (this.calcIdx(this.pFirst) === (this.calcIdx(this.pLast + 1)) && !this.eleNum) {
    return true;
  }

  return false;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  if (this.pFirst === 0 && this.calcIdx(this.pLast) === this.calcIdx(this.fixedNum - 1)) {
    return true;
  }

  if (this.calcIdx(this.pFirst) === this.calcIdx(this.pLast + 1) && this.eleNum) {
    return true;
  }

  return false;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */