// 7 Kyu
// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );



// My Solution
var capitals = function (word) {
	let result = []
  for(i=0;i<word.length;i++){
    if(word.charAt(i) === word.charAt(i).toUpperCase()){
      result.push(i)
    }
  }
  return result
};