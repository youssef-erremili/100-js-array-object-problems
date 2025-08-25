/**
 * Create a deep copy of an input value (object or array).
 *
 * This function recursively copies all nested objects and arrays,
 * ensuring that the returned structure is fully independent from
 * the original. Useful when you want to avoid accidental mutations
 * of shared references in configuration data, state management, etc.
 *
 * Limitations:
 * - Does not handle circular references.
 * - Special objects like Date, Map, Set, or RegExp will be treated
 *   as plain objects.
 *
 * @param {any} input The value to copy (object, array, or primitive).
 * @return {any} A deep copy of the provided input.
 */
function deepCopyObject(input) {
    if (typeof input !== 'object' || input === null) {
        return input;
    }

    let copy;
    if (Array.isArray(input)) {
        copy = [];
        for (let i = 0; i < input.length; i++) {
            copy[i] = deepCopyObject(input[i]);
        }
    }

    else {
        copy = {};
        for (const key in input) {
            if (Object.prototype.hasOwnProperty.call(input, key)) {
                copy[key] = deepCopyObject(input[key]);
            }
        }
    }

    return copy
}

/**
 * Example object to demonstrate deep copy functionality.
 */
const user = {
    user: {
        id: 1,
        name: "Bob",
        contact: {
            email: "bob@example.com",
            phone: "123-456-7890"
        }
    },
    roles: ["admin", "editor"],
    settings: {
        theme: "dark",
        notifications: {
            email: true,
            sms: false
        }
    }
};

const deepCopy = deepCopyObject(user)
deepCopy.user.name = 'youssef'
deepCopy.user.contact.email = 'yousseferremili.dev@gmail.com'

console.log(deepCopy);