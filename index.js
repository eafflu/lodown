'use strict';

// YOU KNOW WHAT TO DO //

/** identity: Designed to return the same value input, unchanged
 * 
 * @param {any} value: The value to be returned 
 * @return {any} value: The return value of the function 
 * 
*/

function identity(value) {
    return value;
}

module.exports.identity = identity;

/** typeOf: Designed to return the type of value as a string
 * 
 * @param {any} value: The value to be type checked
 * @return {string} string: Returns type of value as a string
 * 
*/
function typeOf(value) {
    if (typeof value === 'string') {
        return 'string';
    }
    else if (typeof value === 'function') {
        return 'function';
    }
    else if (typeof value === 'boolean') {
        return 'boolean';
    }
    else if (typeof value === 'number') {
        return 'number';
    }
    else if (typeof value === 'undefined') {
        return 'undefined';
    }
    else if (value === null) {
        return 'null';
    }
    else if (Array.isArray(value)) {
        return 'array';
    }
    else {
        return 'object';
    }

}
module.exports.typeOf = typeOf;

/** first: Designed to return the first number of elements in an array. If 
 * array is not an array returns [], if number is not given  returns the first
 * element in the array.
 * 
 * @param {array} array: The array to be iterated over 
 * @param {number} number: The number of elements to be returned
 * @return {array} array: The first number of elements in an array
 * 
*/

function first(array, number) {
    let result;
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    else if (number > array.length) {
        return array;
    }
    else if (!number) {
        return array[0];
    }
    else {
        result = array.slice(0, number)
    }
    return result;

}
module.exports.each = each;
/** last: Designed to return the first number of elements in an array. If 
 * array is not an array returns [], if number is not given  returns the last
 * element in the array.
 * 
 * @param {array} array: The array to be iterated over 
 * @param {number} number: The number of elements to be returned
 * @return {array} array: The last number of elements in an array
 * 
*/

function last(array, number) {
    let result;
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    else if (number > array.length) {
        return array;
    }
    else if (!number) {
        return array[array.length - 1];
    }
    else {
        result = array.slice(-number)
    }
    return result;

}
module.exports.last = last;

/** indexOf: Designed to return the first occurrence of an element in array. If 
 * value is not in array return -1.
 * 
 * @param {array} array: The array to be iterated over 
 * @param {any} value: The value to be located in array
 * @return {number} index: The index of the found element
 * 
*/


function indexOf(array, value) {
    let result = 0;
    let found = 0
    if (!array.includes(value)) {
        result = -1
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            found++

            if (found === 1) {
                result = i;
            }
        }
    }

    return result;

}
module.exports.indexOf = indexOf;

/** contains: Designed to return true if array contains value, false otherwise
 * 
 * @param {array} array: The array to be iterated over 
 * @param {value} value: The value to be located
 * @return {boolean} boolean: A value representing whether value was found
 * 
*/
function contains(array, value) {
    let flag = false;
    if (array.includes(value)) {
        flag = true;
    }
    return flag;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection)
        }
    }
    else {
        for (let key in collection) {
            callback(collection[key], key, collection)
        }
    }
}

module.exports.each = each;

/** unique: Designed to Return a new array of all elements 
 * from array with duplicates removed
 * 
 * @param {array} array: The array to be iterated over
 * @return {array} array: Array with no duplicates
 * 
*/

function unique(array) {
    let copy = array.slice(0);
    let result = [];
    for (let i = 0; i < copy.length; i++) {
        // check to see if current element exists in copy
        // push if it doesnt
        if (indexOf(result, copy[i]) === -1) {
            result.push(copy[i]);
        }
    }

    return result;
};
module.exports.unique = unique;

/** filter: Designed to return a new array of elements that returned true
 * 
 * 
 * @param {array} array: The array to be iterated over
 * @param {function} func: The function to be used on each element in array
 * @return {array} array: Array with all values that passed test
 * 
*/

function filter(array, func) {
    let result = [];
    each(array, function(element, index, array) {
        if (func(element, index, array)) {
            result.push(element)
        }
    })
    return result;
}
module.exports.filter = filter;


/** reject: Designed to return an array of elements that were rejected by the cb
 * 
 * @param {array} value: Return a new array of elements which evaluated to false
 * @param {function} function: The function used to test each element
 * @return {array} array: Array containing values that evaluated to false
*/
function reject(array, callback) {

    return filter(array, function(element, index, array) {
        if (!callback(element, index, array)) {
            return element
        }
    })

}
module.exports.reject = reject;

/** partition: Designed to return an array with 2 sub arrays 
 *  one with truthy values one with falsy values
 * 
 * @param {array} array: The array to be iterated over 
 * @param {function} callback: The function used to test each element 
 * @return {array} array: Array two subarrays truthy values at index 0 
 * falsy values at index 1
*/

function partition(array, callback) {
    // let result = [];
    let truthy = []
    let falsy = []

    // loop thur array
    // use call back on eveery thing if false push into falsy else push into truthy
    each(array, function(element, index, array) {
        if (callback(element, index, array)) {
            truthy.push(element);

        }
        else {
            falsy.push(element);
        }
    })



    return [truthy, falsy];
}
module.exports.partition = partition;

/** map: Designed to return an array with all the elements modified
 * 
 * @param {obj/array} collection: The collection to be iterated over
 * @param {function} callback: The function used to manipulate elements
 * @return {array} array: Array with same number of elements manipulated 
 * 
*/
function map(collection, callback) {
    let result = []
    each(collection, function(element, index, array) {
        result.push(callback(element, index, array))
    })
    return result;
}
module.exports.map = map;

/** pluck: Designed to Return an array containing the value of property 
 * for every element in array
 * 
 * @param {array} array: The array to be iterated over
 * @param {string} prop: The property to be searched for
 * @return {array} array: Array conaining all elements with said property
 * 
*/
function pluck(array, prop) {
    return map(array, function(element) {
        return element.hasOwnProperty(prop) ? element[prop] : undefined;


    })
}
module.exports.pluck = pluck;
/** Every: Designed to return true if every element has truty value false
 * otherwise.
 * 
 * @param {obj/array} collection: collection to be iterated over
 * @param {function} callback: Function to be used on every element 
 * @return {boolean} boolean: Boolean representing a truthy collection
 * 
*/

function every(collection, callback) {
    // create a status variable to keep track of truthy/falsyness
    let status = true;

    // loop through collection

    each(collection, function(element, index, array) {
        // use the callback on every element if this evaluates to true
        if (callback) {
            if (callback(element, index, array) === false) {
                // update status variable to true
                status = false;
            }
        }
        else if (element) {
            status = true;
        }
        else {
            status = false;
        }

    })

    //return status
    return status;


}

module.exports.every = every;
/** Some: Designed to return true if one value is truthy, false if all are
 *  falsy.
 * 
 * @param {object/array} collection: Collection to be iterated over
 * @param {function} callback: The function to be used on every element 
 * @return {boolean} boolean: Boolean representing if collection has truthy vals
 * 
*/
function some(collection, callback) {
    let status = true;
    if (callback) {
        return !every(collection, function(element, index, coll) {
            return !callback(element, index, coll);

        })
    }
    else {
        each(collection, function(element) {
            if (!element) {
                status = false
            }
        })
    }

    return status;

}
module.exports.some = some;

/** Reduce: Designed to return the same value input, unchanged
 * 
 * @param {array} array: The array to be iterated over 
 * @param {function} callback: The function to be used on each element in array
 * @param {any} seed: The combined value of all previous iterations
 * @return {any} seed: The return value of the function 
 * 
*/

function reduce(array, callback, seed) {

    // update the seed to undefined or the seed if provided
    seed = seed === undefined ? undefined : seed;
    // 
    //     // loop thru collection,
    each(array, function(element, index, array) {
        //       // use the callback on every element
        // if the seed has a value
        if (seed !== undefined) {
            // update the seed to the results of the call back being used on the seed and the next element
            seed = callback(seed, element, index, array)
        }
        else {
            // else update the seed to the first element in the array
            seed = array[index];
        }
    })

    // return the seed
    return seed;

}
module.exports.reduce = reduce;

/** extend: Designed to update first input object with values from following
 * objects
 * 
 * @param {object} obj1: The object to be updated with the other objects props
 * @param {object(s)} ...args: This function can take multiple objects
 * @return {object} obj1: The updated object with new properties
 * 
*/
function extend(obj1,...args){
    let obj = obj1;
    // loop through obj2
      // set the key of the current object to be key on object1 
      
      for(let key in args){
         // does the property on the current object exist in obj 1
           for(let key2 in args[key]){
               console.log(args[key][key2])
               // update obj1 at key2 with 
               console.log(obj1[key2])
               obj1[key2] = args[key][key2];
             
           }
      
          
      
      }
      
    return obj;
}
module.exports.extend = extend;