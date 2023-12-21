/*
Surface Area and Volume of a Box:

Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/
function getSize(width, height, depth) {
    const surfaceArea = 2 * (width * height + height * depth + depth * width)
    const volume = (width * height * depth)

    return [surfaceArea, volume]
}


console.log(getSize(4, 2, 6));      // =>  [88, 48]
console.log(getSize(10, 10, 10));   // => [600, 1000]
