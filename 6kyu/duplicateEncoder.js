//6 Kyu

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 




//My Solution
function duplicateEncode(word){
    let lowerCase = word.toLowerCase()
    let result = ""
    for(i=0;i<word.length;i++){
      if (lowerCase.lastIndexOf(lowerCase[i]) === lowerCase.indexOf(lowerCase[i])){
        result += "("
      } else {
        result += ")"
      }
    }
  return result
}