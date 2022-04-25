// 7 Kyu
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

// More examples in the test cases.

// Good luck!















// My solution

function solve(s){
    let upper = 0
    let lower = 0
    let numbers = 0
    let special = 0
    for(i=0;i<s.length;i++){
       if(s[i] >= "A" && s[i]<= "Z"){
         upper++
       } else if(s[i]>= "a" && s[i]<= "z"){
         lower++
       } else if(s[i] >= "0" && s[i] <= "9"){
         numbers++
       } else {
         special++
       }
    }
  
     
     
     return [upper,lower,numbers,special]
  }