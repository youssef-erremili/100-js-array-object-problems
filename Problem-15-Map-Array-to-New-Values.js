/**
 * Map an array of circle radii to their corresponding areas.
 *
 * Each element in the input array is treated as a radius (r),
 * and transformed into an area using the formula π × r².
 *
 * @param {Array<number>} arr
 *   The input array of numbers representing radii.
 *
 * @throws {Error}
 *   If the input is not an array or if the array is empty.
 *
 * @returns {Array<number>}
 *   A new array containing the calculated areas.
 */
function MapArraytoNewValues(arr) {
    let message = 'The input must be a non-empty Array';

    // Validate input type and not empty
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error(message);
    }

    const pi = Math.PI;

    let result = arr.map((element) => {
        return pi * Math.pow(element, 2);
    });

    return result
}

const list = [1, 2];
console.log(MapArraytoNewValues(list));