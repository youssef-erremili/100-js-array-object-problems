/**
 * mergeTwObjects
 *
 * Merges two objects into one. In case of duplicate keys, 
 * the values from the second object will overwrite the first.
 *
 * @param {Object} obj1 The first object to merge.
 * @param {Object} obj2 The second object to merge.
 * @return {Object|boolean} Returns the merged object, or false if validation fails.
 *
 * @throws Logs a message if either input is not a valid object.
 *
 * @example
 * let user1 = { name: "youssef", age: 25, country: "Morocco", job: "Designer" };
 * let user2 = { name: "erremili", age: 30, language: "JavaScript", country: "Spain" };
 * mergeTwObjects(user1, user2);
 * // Returns: { name: "erremili", age: 30, country: "Spain", job: "Designer", language: "JavaScript" }
 */

function mergeTwObjects(obj1, obj2) {
    let message = 'Input is not valid object';

    // Check obj1
    if (typeof obj1 !== 'object' || obj1 === null || Array.isArray(obj1)) {
        console.log(message);
        return false;
    }

    // Check obj2
    if (typeof obj2 !== 'object' || obj2 === null || Array.isArray(obj2)) {
        console.log(message);
        return false;
    }

    // Merge objects (obj2 overwrites obj1 for duplicate keys)
    const object = Object.assign({}, obj1, obj2);
    console.log(object);

    return object;
}

// Example objects
let user1 = {
    name: "youssef",
    age: 25,
    country: "Morocco",
    job: "Designer"
};

let user2 = {
    name: "erremili",
    age: 30,
    language: "JavaScript",
    country: "Spain"
};

// Merge objects
mergeTwObjects(user1, user2);