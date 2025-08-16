/**
 * Check if a key exists in an object.
 *
 * This function verifies if the provided input is a valid object
 * (not null, not an array), and then checks if the given key exists
 * inside that object.
 *
 * @param {Object} object - The object to check.
 * @param {string} key - The key to verify inside the object.
 * @returns {boolean|undefined} - Returns true if the key exists,
 *                                false if it does not exist,
 *                                or undefined if the input is invalid.
 */
function checkObjectKeyExistence(object, key) {
    let message = 'Error accured, check if input is object and not null'
    if (Object.prototype.toString.call(object) !== '[object Object]' || Array.isArray(object) || object == null) {
        console.log(message);
        return
    }

    if (object.hasOwnProperty(key)) {
        return true
    }
    else {
        return false
    }
}

// Example usage:
const formData = {
    first_name: "Youssef",
    last_name: "Erremili",
    age: 25,
    email: "yousseferremili.dev@gmail.com",
    country: "kenitra, Morocco",
    bio: "Hello everyone! I'm Youssef Erremili, I love technology and I am always looking for new things"
};

console.log(checkObjectKeyExistence(formData, 'first_name')) // true