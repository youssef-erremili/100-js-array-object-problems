/**
 * Reduce Array to Single Value
 *
 * This function multiplies all elements of an array to produce a single value.
 * It uses JavaScript's built-in Array.prototype.reduce method.
 *
 * @param {Array<number>} array - The input array of numbers.
 * @throws {Error} If the input is not an array.
 * @returns {number} The product of all numbers in the array.
 */

function reduceArraytoSingleValue(array) {
    let message = 'The input must be Array'
    if (!Array.isArray(array)) {
        throw new Error(message);
    }

    const result = array.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    })

    return result
}

// Example usage:
const list = [1, 2, 3, 4]
console.log(reduceArraytoSingleValue(list)); // Output: 24