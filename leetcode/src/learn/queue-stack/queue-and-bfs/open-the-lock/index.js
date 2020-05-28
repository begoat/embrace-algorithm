/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
export var openLock = function(deadends, target) {
  const checkItemInDeadends = curr => {
    for (let i = 0; i < deadends.length; i++) {
      if (deadends[i] === curr) {
        return true;
      }
    }

    return false;
  };

  const oneStepMove = curr => {
    let res = [];
    for (let i = 0; i < curr.length; i++) {
      res.push(curr.slice(0, i) + ((Number(curr[i]) + 1 + 10) % 10) + curr.slice(i + 1));
      res.push(curr.slice(0, i) + ((Number(curr[i]) - 1 + 10) % 10) + curr.slice(i + 1));
    }

    return res;
  };

  let initial = '0000';
  let queue = [initial];
  let records = { [initial]: true };
  let result = -1;

  while(queue.length) {
    const nums = queue.length;
    result++;
    for (let i = 0; i < nums; i++) {
      if (queue[i] === target) {
        return result;
      }

      if (checkItemInDeadends(queue[i])) {
        continue;
      }

      let tmp = oneStepMove(queue[i]);
      while(tmp.length) {
        const val = tmp.shift();
        if (!records[val]) {
          queue.push(val);
          records[val] = true;
        }
      }
    }

    for (let i = 0; i < nums; i++) {
      queue.shift();
    }
  }

  return -1;
};

// openLock(['0201','0101','0102','1212','2002'], '0202');
openLock([], '2000');
