// Device Application Pairs (Coding Question)
// Your team at Amazon is working on a system that divides applications to a mixed cluster of computing devices. Each application is identified by an integer ID,
// requires a fixed non-zero amount of memory to execute, and is defined to be either a foreground or background application.
// IDs are guaranteed to be unique within their own application type, but not across types.
// Each device should be assigned two applications at once, one foreground application and one background application.
// Devices have limited amounts of memory and cannot execute applications that require more memory than the available memory.
// The goal of the system is to maximize the total utilization of the memory of a given device.
// A foreground/background application pair is considered to be optimal if there does not exist another pair that uses more memory than this pair, and also has a total less than or equal to the total memory of the device.
// For example, if the device has 10MB memory, a foreground/background pair using a sum total of 9MB memory would be optimal if there does not exist a pair that uses a sum total of 10 MB, but would not be optimal if such a pair did exist.

// Write an algorithm to find the sets of foreground and background application pairs that optimally utilize the given device for a given list of foreground applications and a given list of background applications.
// Input
// The input to the function/method consists of three arguments:
// deviceCapacity, an integer representing the maximum capacity of the given device;
// foregroundAppList, a list of pairs of integers where the first integer represents the unique ID of a foreground application and the second integer represents the amount of memory required by this application;
// backgroundAppList, a list of pairs of integers where the first integer represents the unique ID of a background application and the second integer represents the amount of memory required by this application.
// Output
// Return a list of pairs of integers representing the pairs of IDs of foreground and background applications that optimally utilize the given device [foregroundAppID,backgroundAppID].
// If no pair is possible, return a list with empty pair - not just an empty list.
// Examples

// Example 1:
// Input:
// deviceCapacity = 7
// foregroundAppList = [[1,2],[2,4],[3,6]]
// backgroundAppList = [[1,2]]
// Output:
// [[2,1]]

// Explanation:
// There are only three combinations, [1,1], [2,1], and [3,1], which use a total of 4, 6, and 8 MB memory, respectively.
// Since 6 is the largest use that does not exceed 7, [2,1] is the only optimal pair.
// Example2:
// Input:
// deviceCapacity = 10
// foregroundAppList = [[1, 3], [2, 5], [3, 7], [4, 10]]
// backgroundAppList = [[1, 2], [2, 3], [3, 4], [4, 5]]
// Output:
// [[2, 4], [3, 2]]
// Explanation:
// There are two pairs of foreground and background applications possible that optimally utilizes the given device.
// Application 2 from foregroundAppList uses 5 memory units, and application 4 from backgroundAppList also uses 5 memory units. Combined, they add up to 10 units of memory.
// Similarly, application 3 from foregroundAppList uses 7 memory units, and application 2 from backgroundAppList uses 3 memory units. These also add up to 10 units of memory.
// Therefore, the pairs of foreground and background applications that optimally utilize the device are [2, 4] and [3, 2].
// Example3:
// Input:
// deviceCapacity = 16
// foregroundAppList = [[2, 7], [3, 14]]
// backgroundAppList = [[2, 10], [3, 14]]
// Output:
// [()]
// Explanation:
// There exist no combination. So, the output is a list with empty pair.
// '''

const applicationPairs = (
  deviceCapacity = 10,
  foregroundAppList = [
    [1, 3],
    [2, 5],
    [3, 7],
    [4, 10],
  ],
  backgroundAppList = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ],
) => {
  foregroundAppList.sort((a, b) => a[1] - b[1])
  backgroundAppList.sort((a, b) => a[1] - b[1])

  let ans = []
  let right = backgroundAppList.length - 1
  let left = 0
  let max = -Infinity
  while (right >= 0 && left < foregroundAppList.length) {
    let sum = foregroundAppList[left][1] + backgroundAppList[right][1]
    if (target > sum) {
      right--
    } else {
      if (max <= sum) {
        if (max < sum) {
          max = sum
          ans = []
        }
        ans.push([foregroundAppList[left][0], backgroundAppList[right][0]])
        let i = right - 1
        while (i >= 0 && backgroundAppList[i] == backgroundAppList[i + 1]) {
          ans.push([foregroundAppList[left][0], backgroundAppList[i][0]])
          i--
        }
        left++
      }
    }
  }
  return ans
}
applicationPairs()
