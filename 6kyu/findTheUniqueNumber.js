// 6 Kyu

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.



//  My Solution
function findUniq(arr) {
    let sort = arr.sort((a,b)=> a-b)
    return sort[0] === sort[1]? sort.pop(): sort[0]
  }
  