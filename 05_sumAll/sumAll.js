const sumAll = function(initialValue, endValue) {
    if (initialValue < 0 || endValue < 0 || typeof initialValue !== "number" || typeof endValue !== "number") return "ERROR"
    let result = 0;
    if (initialValue > endValue) {
        let tempValue = endValue;
        endValue = initialValue;
        initialValue = tempValue;
    }

    for (let i = initialValue; i <= endValue; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
