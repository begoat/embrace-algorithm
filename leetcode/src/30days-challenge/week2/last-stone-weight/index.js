/**
 * @param {number[]} stones
 * @return {number}
 */

export const insertNodeToLinkList = (val, linkList) => {

};

export const sortArrayDesc = arr => {
  if (!arr.length) {
    return [];
  }

  let result = [{ val: arr[1], nxt: null }];
  for (let i = 1; i < arr.length; i++) {
    insertNodeToLinkList(arr[i], linkList);
  }

  return result;
};

export const lastStoneWeight = function(stones) {
  const sortArrayAsc = () => {

  };

  return true;
};
