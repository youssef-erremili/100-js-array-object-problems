/**
 * Reverse an array using a for loop.
 *
 * Loops from the last index to the first and pushes each element into a new array.
 *
 * @param {Array} arr The array to reverse.
 * @returns {Array|undefined} The reversed array, or undefined if input is not an array.
 */
function reverseArrayV1(arr) {
    if (!Array.isArray(arr)) {
        console.log('Input must be Array');
        return;
    }

    let newArr = new Array();

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    console.log(newArr);
    return newArr;
}

/**
 * Reverse an array using the two-pointer swap method.
 *
 * Swaps elements from the start and end until the middle of the array is reached.
 *
 * @param {Array} arr The array to reverse.
 * @returns {Array|undefined} The reversed array, or undefined if input is not an array.
 */
function reverseArrayV2(arr) {
    if (!Array.isArray(arr)) {
        console.log('Input must be Array');
        return;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    console.log(arr);
    return arr;
}

// Array from 1 to 20 in one line
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Test the functions
reverseArrayV1(numbers); // for loop
reverseArrayV2(numbers); // two-pointer swap