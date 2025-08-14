/**
 * Add a new key-value pair to an object if it does not already exist.
 *
 * This method first validates that the given variable is a plain object 
 * (not null, not an array, and of type 'object'). It then checks if the key 
 * already exists in the object. If the key is new, it will be added using 
 * Object.defineProperty().
 *
 * @param {Object} object - The object to which the key-value pair will be added.
 * @param {string} key - The property name to be added.
 * @param {*} value - The value associated with the property.
 * @returns {void}
 */
function addKeyToObject(object, key, value) {
    // Validate that input is a plain object
    if (typeof object !== 'object' || object === null || Array.isArray(object)) {
        console.log('Input is not valid object');
        return;
    }

    // Check if the key already exists
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        console.log(`Key "${key}" already exists`);
        return;
    }

    // Add the new key-value pair
    Object.defineProperty(object, key, {
        value: value,
        writable: true
    });

    console.log(object);
    return object;
}

// Example usage
let product = { name: 'PC', price: 100 };
let arr = [];
let str = 'hello';

addKeyToObject(product, 'category', 'electronics'); // Works
// addKeyToObject(arr, 'category', 'electronics');  // "Input is not object"
// addKeyToObject(str, 'category', 'electronics');  // "Input is not object"
// addKeyToObject(null, 'category', 'electronics'); // "Input is not object"
