/**
 * Access the value of a given key from an object.
 *
 * @param {Object} object  The object containing the data.
 * @param {string} key     The key whose value should be retrieved.
 * @returns {*}            The value of the key if found, or undefined if not found.
 *
 * @example
 * const user = { name: "Alice", age: 30 };
 * AccessObjectValue(user, 'name'); // "Alice"
 * AccessObjectValue(user, 'email'); // undefined
 */
function AccessObjectValue(object, key) {
    let result = null

    // Validate that the provided argument is a plain object
    if (Object.prototype.toString.call(object) !== '[object Object]') {
        console.log('Input must be Object');
        return;
    }

    // Check if the object has the provided key
    if (object.hasOwnProperty(key)) {
        result = object[key]
        console.log(result);
        return
    }
    else {
        result = undefined
        console.log(result);
        return result
    }
}

const userInfo = {
    firstname: "Youssef",
    lastname: "Erremili",
    age: 25,
    email: "yousseferremili.dev@gmail.com",
    country: "kenitra, Morocco",
    bio: "Hello everyone! I'm Youssef Erremili, I love technology and I am always looking for new things"
};

AccessObjectValue(userInfo, 'firstname')
