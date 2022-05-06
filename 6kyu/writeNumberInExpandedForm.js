//6 Kyu
// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.


// My Solution
function expandedForm(num) {
    let split = num.toString().split("")
    for(i=0;i<split.length;i++){
      let zeros = split.length -i -1
      while(zeros>0){
        split[i] += "0"
        zeros--
        }
    }
    split = split.filter(e=> !e.startsWith(0))
    return split.join(" + ")
  }