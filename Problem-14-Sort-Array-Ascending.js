/**
 * Sort the given array in ascending order using the Bubble Sort algorithm.
 *
 * This function will throw an error if the provided argument is not an array.
 * The sorting is done in-place, and the final sorted array is also returned
 * inside a result wrapper for tracking.
 *
 * @param {Array<number>} arr
 *   The input array of numbers to be sorted.
 *
 * @throws {Error}
 *   If the provided argument is not an array.
 *
 * @returns {Array<Array<number>>}
 *   Returns an array containing a single element: the final sorted array.
 */

function SortArrayAscending(arr) {
    let message = 'The input must be an Array';

    // Validate input type
    if (!Array.isArray(arr)) {
        throw new Error(message);
    }

    let result = [];

    // Bubble Sort implementation
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    result.push([...arr]);
    return result;
}

// Example usage:
const list = [30, 17, 8, 22, 1, 25, 13, 4, 19, 10, 28, 6, 15, 2, 24, 11, 20, 7, 29, 16, 5, 26, 12, 0, 23, 9, 18, 27, 14, 21];
console.log(SortArrayAscending(list));
