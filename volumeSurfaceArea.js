// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    const area = 2 * width + 2 * height + 2 * depth
    const volume = width * height * depth
    return [area, volume]
}

console.log(getSize(4, 2, 6))

//Define a variable to hold area

//Define a variable to hold volume

//return [area,volume]