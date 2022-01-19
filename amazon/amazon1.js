//Amazon AO 1
// we have lists of nodes from [0,0] find the shortest distance from the
// list and return number of K nodes

//ex => list[[1,2],[-1,-1],[2,6]] k = 2,
//answer => [-1,-1],[1,2]

const practice = (
  list = [
    [1, 2],
    [-1, -1],
    [2, 6],
  ],
  k = 2,
) => {
  let map = new Map()
  let ans = []
  function distance(x, y) {
    let distance = Math.pow(0 - x, 2) + Math.pow(0 - y, 2)
    return distance
  }
  for (let i = 0; i < list.length; i++) {
    let x = list[i][0]
    let y = list[i][1]

    map.set(x + ',' + y, distance(x, y))
  }

  let result = [...map.entries()].sort((a, b) => a[1] - b[1]).map((a) => a[0])

  for (let i = 0; i < k; i++) {
    let commaIndex = result[i].indexOf(',')
    let x = parseInt(result[i].substring(0, commaIndex))
    let y = parseInt(result[i].substring(commaIndex + 1, result[i].length))
    ans.push([x, y])
  }

  return ans
}

practice()
