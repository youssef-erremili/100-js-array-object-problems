/**
 * Filters an array to include only elements that meet a specified condition.
 *
 * @param {Array} arr - The input array to be filtered.
 * @returns {Array|boolean} - Returns an array of elements that satisfy the condition,
 *                            or false if the input is not an array.
 */
function FilterArraybyCondition(arr) {
    let message = 'The input must be an array';

    // check if input type is an array
    if (!Array.isArray(arr)) {
        console.log(message);
        return false;
    }
    // store new filterde elements 
    const result = []
    arr.filter((elem) => {
        if (elem % 2 === 0) {
            result.push(elem)
        }
    })

    // return the result variable that hold new filterd data
    console.log(result);
    return result
}



// Example Usage    
const list = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
FilterArraybyCondition(list);