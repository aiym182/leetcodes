// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//         1
//        1 1
//       1 2 1
//      1 3 3 1
//     1 4 6 4 1

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// ** solution ** set first and last number for each row and then fill the rest
// setting end of array = [i][i]
// fill the middle middle is [i-1][j-1]+[i-1][j]
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = []

  for (let i = 0; i < numRows; i++) {
    ans.push([1])
  }
  for (let i = 0; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j]
    }

    ans[i][i] = 1
  }

  console.log(ans)
}

generate(5)
