// 7 Kyu

// You are given array of integers, your task will be to count all pairs in that array and return their count.

// Notes:

//     Array can be empty or contain only one value; in this case return 0
//     If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
//     Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

// Examples

// [1, 2, 5, 6, 5, 2]  -->  2

// ...because there are 2 pairs: 2 and 5

// [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4

// ...because there are 4 pairs: 2, 20, 6 and 2 (again)

// My Solution
function duplicates(array){
    let pairs = 0
    //sort array so they are in numerical order
    let sorted = array.sort((a,b)=> a-b)
    
    // loop through the array
    for(i=0;i<sorted.length;i++){
      //if we find a "pair" we add one to pairs and skip ahead as we dont want that pair counting more than once
       if(sorted[i] === sorted[i+1]){
          pairs++
          //skip ahead so it doesnt count the last # of the pair with the first of the new pair if containing multiple
          i++
         }
    }
     return pairs
   }