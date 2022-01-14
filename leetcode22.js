//22. Generate Parantheses

//Given n pairs of parentheses, write a function to generate
// all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let stack = []
  let res = []

  const backTrack = (open, close) => {
    if (open === close && open === n) {
      res.push(stack.join(''))
    }
    if (open < n) {
      stack.push('(')
      backTrack(open + 1, close)
      console.log('create Open :' + stack)
      stack.pop()
    }
    if (close < open) {
      stack.push(')')
      backTrack(open, close + 1)
      console.log('create Close :' + stack)
      stack.pop()
    }
  }

  backTrack(0, 0)
  return res
}
