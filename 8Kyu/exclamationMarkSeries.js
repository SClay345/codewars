//8 Kyu
// Description:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// Note

// Please don't post issue about difficulty or duplicate.


// My Solution
function remove (string) {
    let split =  string.split("")
    if(split[split.length-1] === "!"){
      return split.slice(0,-1).join("")
    }
    return string
  }