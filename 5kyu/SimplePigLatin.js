//5 kyu
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

//My Solution
function pigIt(str){
    return str.split(" ").map(e=> e.match(/[a-zA-Z]/i) ?e.substring(1) + e[0] + 'ay':e).join(" ")
  }