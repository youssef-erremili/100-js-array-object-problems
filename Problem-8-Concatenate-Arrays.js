/**
 * Concatenate two arrays into one.
 *
 * This function takes two arrays, checks if both are valid arrays,
 * and merges them into a single array. If one of the inputs
 * is not an array, it will return false and show an error message.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array|boolean} - Returns the new array if inputs are valid,
 *                            or false if one of the inputs is not an array.
 */
function concatenateArrays(arr1, arr2) {
    let message = 'The input must Array'
    let result = []

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        console.log(message);
        return false
    }

    result = [].concat(arr1, arr2)
    console.log(result);

    return result
}

// Example usage
let x = [1, 2, 3, 4, 5]
let y = [6, 7, 8, 9, 10]

concatenateArrays(x, y)