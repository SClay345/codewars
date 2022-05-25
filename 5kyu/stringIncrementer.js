//5 Kyu
// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered
function incrementString (string) {
    let newStr = string.split('')
     let word = [];
     let num = [];
   for (let i = 0 ; i<string.length ;i++){
     isNaN(string[i])? word.push(string[i]) : num.push(string[i]) 
   }
   
   let l=num.length-1
   let pureNum=0
   
   for (let i = 0 ; i<num.length ;i++){
     pureNum += num[i] * Math.pow(10,l);
     l--;
   }
   
   let wordNum = (pureNum+1).toString().split('');
   for (let i = wordNum.length ; i<num.length ;i++){
     wordNum.unshift("0");
   }
   
   return word.join("")+wordNum.join("");
 }