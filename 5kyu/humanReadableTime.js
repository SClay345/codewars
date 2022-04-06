// 5 Kyu
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// My Solution
function humanReadable (seconds) {
    let ss = 0
    let mm = 0
    let hh = 0
    for(i=0;i<seconds;i++){
      ss++
      if(ss>59){
        ss=0
        mm++
      }
      if(mm>59){
        mm=0
        hh++
      }
    }
    if(ss < 10){
      ss = '0'+ss
    }
    if(mm<10){
      mm='0'+mm
    }
    if(hh<10){
      hh='0'+hh
    }
    return `${hh}:${mm}:${ss}`
  }