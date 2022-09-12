const removeFromArray = function(arr, ...toRemove) {
    for (const n of toRemove) {
        arr = arr.filter(ele => ele !== n)
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
