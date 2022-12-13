const array = [1, 3, 2, 7, 4, 6];
const p = 3;
let d = 1;

if (d === 0) {
    // left rotation
    function rotLeft(array, p) {
        let rotatedArray = [];
        for (var i = p; i < array.length; i++) {
            rotatedArray.push(array[i]);
            console.log(rotatedArray)
        }
        for (var i = 0; i < p; i++) {
            rotatedArray.push(array[i])
            console.log(rotatedArray)
        }
        return rotatedArray;

    }
    const output = rotLeft(array, p)
    console.log(output)



} else if (d === 1) {
    // right rotation
    function rotRight(array, p) {

        const rotationIndex = array.length - p;

        const leftSide = array.slice(0, rotationIndex)
        const rightSide = array.slice(rotationIndex, array.length);

        const rotationArray = [...rightSide, ...leftSide];
        return rotationArray;

    }
    const output = rotRight(array, p)
    console.log(output)


}



// right rotation 

