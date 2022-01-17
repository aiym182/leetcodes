// 350. Intersection of Two Arrays II
// Easy

// 3723

// 626

// Add to List

// Share
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// ** solutions **
//create a map and push nums1 to key of map and push count for value.
// loop through nums2 and find the condition where key is equal to nums2 and
// deduct count, when count is bigger than 0

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map()
  let ans = []
  for (let n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1)
    } else {
      map.set(n, 1)
    }
  }
  for (let n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      ans.push(n)
      map.set(n, map.get(n) - 1)
    }
  }
  return ans
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
