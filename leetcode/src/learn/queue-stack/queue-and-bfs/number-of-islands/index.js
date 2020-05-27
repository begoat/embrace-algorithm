/**
 * @param {character[][]} grid
 * @return {number}
 */
export var numIslands = function(grid) {
  if (!grid || !grid.length) {
    return 0;
  }

  function bfs(g, ii, jj) {
    if (ii < 0 || ii >= g.length || jj < 0 || jj >= g[ii].length || g[ii][jj] == '0') {
      return 0;
    }

    g[ii][jj] = 0;
    bfs(g, ii - 1, jj);
    bfs(g, ii + 1, jj);
    bfs(g, ii, jj + 1);
    bfs(g, ii, jj - 1);
    return 1;
  }


  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 1) {
        result += bfs(grid, i, j);
      }
    }
  }

  return result;
};