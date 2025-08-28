/**
 * Find the index of a target value in an array.
 *
 * If the target value exists in the array, the function returns its index.
 * If the target does not exist, the function returns -1.
 * If the first argument is not an array, an error is thrown.
 *
 * @param  {Array} array  The array to search in.
 * @param  {*}     param  The value to search for within the array.
 * @return {number}       The index of the value if found, or -1 if not found.
 */
function FindIndexinArray(array, param) {
    let message = 'The input must be Array'
    let result = -1

    if (!Array.isArray(array)) {
        throw new Error(message, array);
    }

    let isContains = array.includes(param)
    if (isContains === true) {
        result = array.indexOf(param)
    }
    return result
}


// Example usage:
const list = [1, 2, 4, 3, 5, 6, 7, 8]
console.log(FindIndexinArray(list, 4)) // return = 2
console.log(FindIndexinArray(list, 99)) // return = -1
