/**
 * Extract a portion of an array.
 *
 * This function slices an array between the given start index
 * and end index (exclusive). It demonstrates two approaches:
 * 
 *  - Solution 1: Using the built-in Array.slice() method.
 *  - Solution 2: Manual slicing with a for loop.
 *
 * If the input is not an array, an error message is logged.
 *
 * @param  {Array} arr
 *   The input array to be sliced.
 * @param  {number} [start=0]
 *   The starting index (inclusive).
 * @param  {number} [end=arr.length-1]
 *   The ending index (exclusive).
 *
 * @return {Array}
 *   A new array containing the sliced elements.
 */
function sliceArray(arr, start = 0, end = arr.length - 1) {
    if (!Array.isArray(arr)) {
        console.log('Input must be Array');
        return;
    }

    // Solution 1: Built-in slicing using Array.slice()
    let result = [];
    result = arr.slice(start, end)

    // Solution 2: Manual slicing using a for loop
    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i])
    }

    console.log(result);
    return result
}


const list = [1, 2, 4, 5, 6, 7, 8, 9, 10]
sliceArray(list, 3, 6)  // Output: [5, 6, 7]