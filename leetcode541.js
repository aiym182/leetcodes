// 541. Reverse String II

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

//solution ** set two pointers one for loop and one for k and if condition meets
// move condition pointer along with k

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split('')

  function reverse(left, right) {
    while (left < right) {
      let temp = s[left]
      s[left] = s[right]
      s[right] = temp
      left++
      right--
    }
  }

  for (let i = 0, j = 0; i < s.length; i++) {
    if (i == j) {
      reverse(i, i + k - 1)
      j += 2 * k
    }
  }
  return s.join('')
}
