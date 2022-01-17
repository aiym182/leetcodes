// 542. 01 Matrix
// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1:

// 0 0 0
// 0 1 0
// 0 0 0

// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Example 2:

// 0 0 0
// 0 1 0
// 1 1 1

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

// ** solution ** using dfs techniques from all zeros

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  if (mat.length === 0) return mat
  let max = Infinity
  let queue = []
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 0) {
        //push to queue (gonna search from 0 with queue)
        queue.push([i, j, 0])
      } else {
        //
        mat[i][j] = max
      }
    }
  }

  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  while (queue.length > 0) {
    let pos = queue.shift()

    // if slected value is set as Infinity
    if (mat[pos[0]][pos[1]] > pos[2]) {
      mat[pos[0]][pos[1]] = pos[2]
    }

    for (let d of dir) {
      let newPos = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1]

      if (
        newPos[0] > -1 &&
        newPos[0] < mat.length &&
        newPos[1] > -1 &&
        newPos[1] < mat[0].length
      ) {
        // push to queue the one we set as Infinity
        if (mat[newPos[0]][newPos[1]] === Infinity) {
          queue.push(newPos)
        }
      }
    }
  }

  console.log(mat)
}

updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
])
