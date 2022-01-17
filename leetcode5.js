// 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

// ** solution: loop through every char and spread from there.
// and there is two case where pel is odd and even ex) aba || abba
var longestPalindrome = function (s) {
  let max = 0
  let left = 0
  let right = 0
  for (let i = 0; i < s.length; i++) {
    let len1 = spread(i, i, s)
    let len2 = spread(i, i + 1, s)

    if (len1 > len2) {
      if (len1 > max) {
        max = len1
        let c = Math.floor(len1 / 2)
        left = i - c
        right = i + c
      }
    } else {
      if (len2 > max) {
        max = len2
        let c = Math.floor(len2 / 2)
        left = i + 1 - c
        right = i + c
      }
    }
  }

  return s.substring(left, right + 1)
}

const spread = (left, right, word) => {
  let count = 0
  while (left >= 0 && right < word.length && word[left] == word[right]) {
    count = right - left + 1
    left--
    right++
  }

  return count
}

console.log(longestPalindrome('babbbbbbac'))
