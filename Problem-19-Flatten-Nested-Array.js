


function flattenNestedArray(array) {
    let message = 'Input type must be Array'
    if (!Array.isArray(array)) {
        throw new Error(message);
    }


    // flatten = array.reduce(function (accumulator, currentValue) {
    //     // if (Array.isArray(currentValue)) {
    //     return accumulator.concat(currentValue)
    //     // }
    // }, [])

    
    let flatten = [];

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten = flatten.concat(flattenNestedArray(array[i]))
        }
        else {
            flatten.push(array[i])
        }
    }

    return  flatten
}


const list = [1, 2, 3, 4, 5, [6, [7, 8], 9], [10, [11, [12, 13], 14], 15, [16, 17]]]
console.log(flattenNestedArray(list));
