/**
 * Find the maximum numeric element in an array.
 *
 * @param {Array} arr The array to process.
 * @return {number|undefined} Returns the maximum value or undefined if input is invalid.
 */
function FindMaximuminArray(arr) {
    let max = null;

    // Check if input is an array
    if (!Array.isArray(arr)) {
        console.log('Input must be an array');
        return
    }

    // Check if array contains more than one element
    if (arr.length <= 1) {
        console.log('Input must be an contains more then one element');
        return
    }

    // Validate all elements are numbers
    for (const element of arr) {
        if (typeof element !== 'number') {
            console.log('Array must contain only numbers');
            return;
        }
    }

    // Use reduce to find max element
    arr.reduce((accumulator, currentValue) => {
        // if (currentValue > accumulator) {
        //     max = currentValue
        //     return max
        // }
        // else {
        //     max = accumulator
        //     return max
        // }

        // Compare currentValue with accumulator and assign the greater value to max
        max = currentValue > accumulator ? currentValue : accumulator
        return max
    }, arr[0])

    // Output the max value
    console.log(max);
}

let arrayCol = [4, 8, 7, 13, 12, 4, 8, 7, 13, 20, 12];
FindMaximuminArray(arrayCol)
