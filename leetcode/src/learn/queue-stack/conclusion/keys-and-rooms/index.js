/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
export var canVisitAllRooms = function(rooms) {
  if (!rooms.length) {
    return true;
  }

  let roomsOpened = rooms.reduce((accu, curr) => {
    return Object.assign(accu, {
      [curr]: false
    });
  }, {});
  roomsOpened[0] = true;

  let queue = [];
  rooms[0].forEach(r => {
    roomsOpened[r] = true;
    queue.push(r);
  });

  while (queue.length) {
    const front = queue.shift();
    for (let i = 0; i < rooms[front].length; i++) {
      const curr = rooms[front][i];
      if (!roomsOpened[curr]) {
        roomsOpened[curr] = true;
        queue.push(curr);
      }
    }
  }

  return Object.keys(roomsOpened).filter(k => roomsOpened[k]).length === rooms.length;
};
