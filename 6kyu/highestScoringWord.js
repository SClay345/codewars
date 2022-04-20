// 6 Kyu

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.





//My solution

function high(x){
    let sum =0
    let split = x.split(" ")
    let highest = 0
    let word = ""
    
    for(i=0;i<split.length;i++){
      for(j=0;j<split[i].length;j++){
        sum += parseInt(split[i].charCodeAt(j) -96)
        console.log(sum)
      }
      if(sum === highest){
        sum = 0
      } else if(sum > highest){
        
        highest = sum
        word = split[i]
        sum = 0
      }else {
      sum = 0
      }
    }
    
    return word
  }