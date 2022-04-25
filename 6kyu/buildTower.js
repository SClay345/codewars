// 6 Kyu
// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]








// My solution
function towerBuilder(nFloors) {
    let stars = ""
    let spaces = ""
    let result = []
    for(i=0;i<nFloors;i++){
      stars = "*".repeat((i*2) +1)
      spaces = " ".repeat(nFloors -i -1)
      result.push(spaces+stars+spaces)
    }
    return result
  }