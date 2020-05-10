/**
 * @param {number[]} A
 * @return {boolean}
 */
export const validMountainArray = function(A) {
  if (A.length < 3) {
    return false;
  }

  if (A[0] >= A[1]) {
    return false;
  }

  // steps == 1 means up; steps == 2 means down;
  let steps = 1;
  for (let i = 0; i < A.length - 1; i++) {
    if (steps === 1) {
      if (A[i] < A[i + 1]) {
        //
      } else if (A[i] > A[i + 1]) {
        steps = 2;
      } else {
        return false;
      }
    } else if (steps === 2) {
      if (A[i] > A[i + 1]) {
        //
      } else {
        return false;
      }
    }
  }

  if (steps === 2) {
    return true;
  }

  return false;
};
