//8 Kyu

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
// My Solution
function getSize(width, height, depth){
    let area = ((width*depth)*2) + ((depth*height)*2) + ((width*height)*2)
    let volume = width*height*depth
    return [area,volume]
  }