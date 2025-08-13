/**
 * Function to check if a to-do list (array) is complete.
 * A to-do list is considered complete if it has no tasks (empty array).
 *
 * @param {Array} arr - The array representing the to-do list
 * @returns {boolean} - Returns true if the array is empty (complete), false otherwise
 */
function isToDoListComplete(arr) {
    // Check if input is actually an array
    if (!Array.isArray(arr)) {
        console.log('Input must be array'); // Log error message if not an array
        return false; // Return false for invalid input
    }

    // Check if the array has tasks
    if (arr.length > 0) {
        return false; // Array has tasks, so to-do list is not complete
    }
    // Check if the array is empty
    else if (arr.length === 0) {
        return true; // Array is empty, to-do list is complete
    }
}

// Example usage:
let tasks = ["Task 1", "Task 2", "Task 3"]; // Array with tasks
console.log(isToDoListComplete(tasks)); // Output: false

let task = []; // Empty array, no tasks
console.log(isToDoListComplete(task)); // Output: true
