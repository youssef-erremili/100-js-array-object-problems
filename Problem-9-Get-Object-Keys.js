/**
 * Retrieve all keys from an object.
 *
 * This function checks if the input is a valid non-null plain object.
 * If valid, it retrieves and returns all the keys from the object.
 * Otherwise, it logs an error message and returns undefined.
 *
 * @param  {Object} object
 *   The object from which to extract keys.
 *
 * @return {Array<string>|undefined}
 *   Array of keys if the input is valid,
 *   otherwise undefined.
 */
function getObjectKeys(object) {
    let message = 'Error accured, check if input is object and not null'
    if (Object.prototype.toString.call(object) !== '[object Object]' || Array.isArray(object) || object == null) {
        console.log(message);
        return
    }
    let result = Object.keys(object)
    console.log(result);
    return result
}



const formData = {
    first_name: "Youssef",
    last_name: "Erremili",
    age: 25,
    email: "yousseferremili.dev@gmail.com",
    country: "kenitra, Morocco",
    bio: "Hello everyone! I'm Youssef Erremili, I love technology and I am always looking for new things"
};

getObjectKeys(formData);