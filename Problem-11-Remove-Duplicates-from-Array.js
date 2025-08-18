/**
 * RemoveDuplicatesfromArray
 *
 * Removes duplicate values from a given array.
 *
 * @param {Array} arr The array to process.
 * @return {Array|boolean} Returns a new array with duplicates removed,
 *                         or false if validation fails.
 *
 * @throws Logs messages if input is not an array or has less than two elements.
 *
 * @example
 * let listA = [1, 2, 3, 3, 4, 5, 5];
 * RemoveDuplicatesfromArray(listA); // returns [1, 2, 3, 4, 5]
 */
function RemoveDuplicatesfromArray(arr) {

    let messageA = 'The input must be an array';
    let messageB = 'The input must contain at least two elements';

    if (!Array.isArray(arr)) {
        console.log(messageA);
        return false;
    }

    if (arr.length < 2) {
        console.log(messageB);
        return false;
    }

    const unique = arr.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            accumulator.push(currentValue)
        }
        return accumulator
    }, [])

    return unique;
}


// Example usage
let listA = [1, 2, 3, 3, 4, 5, 5];
let listB = [];
let listC = 'Normal Text';

console.log(RemoveDuplicatesfromArray(listA)); // [1, 2, 3, 4, 5]