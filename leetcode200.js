// 200. Number of Islands
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent
// lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

//*** use dfs if node is == '1' and add count */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length == 0 && grid[0].length == 0) return 0

  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '1') {
        dfs(i, j, grid)
        count++
      }
    }
  }

  return count
}
let dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
]
const dfs = (x, y, mat) => {
  if (mat[x][y] == '1') mat[x][y] = '0'

  for (let d of dir) {
    if (
      x + d[0] >= 0 &&
      x + d[0] < mat.length &&
      y + d[1] >= 0 &&
      y + d[1] < mat[0].length &&
      mat[x + d[0]][y + d[1]] != '0'
    ) {
      dfs(x + d[0], y + d[1], mat)
    }
  }
}

numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
])
