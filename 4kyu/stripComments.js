//4Kyu
// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples

// The output expected would be:

// apples, pears
// grapes
// bananas

// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

//My Solution
function solution(input, markers) {
    let found = false
    let letters = input.split('')
    let stripped = letters.reduce((acc , letter) => {
      if(markers.includes(letter)) {
        found = true
        }
      if(found  && letter === '\n') {
        found  = false
        }
      if(!found ) acc.push(letter)
        return acc
    }, [])
    
    return stripped.join('').replace(/\s\n/ , '\n').trim()
  };