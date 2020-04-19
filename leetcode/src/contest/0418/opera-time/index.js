/**
 * @param {number[][]} increase
 * @param {number[][]} requirements
 * @return {number[]}
 */
export const getTriggerTime = function(increase, requirements) {
  // console.log('increase', increase, 'requirements', requirements);
  let resources = [0, 0, 0];
  let result = Array.from({length: requirements.length}, () => -1);

  for (let i = 0; i < increase.length; i++) {
    const [c, r, h] = increase[i];
    resources[0] += c;
    resources[1] += r;
    resources[2] += h;

    for (let j = 0; j < requirements.length; j++) {
      if (result[j] !== -1) {
        continue;
      }

      const [cL, rL, hL] = requirements[j];
      if (resources[0] >= cL && resources[1] >= rL && resources[2] >= hL) {
        result[j] = i + 1;
      }
    }
  }

  return result;
};

getTriggerTime([[2,8,4],[2,5,0],[10,9,8]], [[2,11,3],[15,10,7],[9,17,12],[8,1,14]]);