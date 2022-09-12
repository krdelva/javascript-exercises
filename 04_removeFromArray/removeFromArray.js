const removeFromArray = function(arr, ...toRemove) {
    //console.log(`${arr} || ${toRemove}`)
    for (const n of toRemove) {
        arr = arr.filter(ele => ele !== n)
    }
    return arr;
    //return arr.filter(ele => ele !== toRemove)
};

// Do not edit below this line
module.exports = removeFromArray;
