//8 Kyu
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

// My Solution
function take(arr, n) {
    if(arr[0] === undefined){
      return []
    }
    let result = []
    if(n>=arr.length){
      for(i=0;i<arr.length;i++){
        result.push(arr[i])
      }
    } else{
      for(i=0;i<n;i++){
        result.push(arr[i])
      }
    }
    return result
  }


  //Refactored Solution
  function take(arr,n){
    return arr.slice(0,n)
  }