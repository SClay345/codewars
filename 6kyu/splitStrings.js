// 6 Kyu

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// My Solution

function solution(str){
    let result = []
    if(str.length %2 === 1){
      str = str + '_'
    }
    for(i=0;i<str.length;i+=2){
      result.push(str.substring(i,i+2))
    }
  
   return result
 }