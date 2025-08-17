/**
 * Sum all elements in an array.
 *
 * @param {Array} collections - The array of numbers to sum.
 * @return {void}
 */
function SumArrayElement(collections) {
    let sum = 0;

    // Check if the input is an array
    if (Array.isArray(collections)) {
        // Sum each element in the array
        collections.forEach((value) => {
            sum += value;
        });

        // Output the sum
        console.log(sum);
        return sum;
    }

    // If input is not an array, output an error message
    console.log('Input is not an array');
}



/**
 * Sum all numeric elements in an array with validation.
 *
 * @param {Array} arr - The array to process.
 * @return {number|undefined} Returns the sum of the elements or undefined if input is invalid.
 */
function SumArrayElementVtwo(arr) {
    let sum = 0;

    // Begin process

    // Check if input is an array
    if (!Array.isArray(arr)) {
        console.log('Input must be an array');
        return;
    }

    // Validate all elements are numbers
    for (const value of arr) {
        if (typeof value !== 'number') {
            console.log('Array must contain only numbers');
            return;
        }
    }

    // Sum all elements using reduce
    sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    // Output the sum
    console.log(sum);

    // Return the calculated sum
    return sum;
}

// Example usage:
let arrayCol = [4, 8, 7, 13, 12, 4, 8, 7, 13, 12];
SumArrayElement(arrayCol)
SumArrayElementVtwo(arrayCol)
