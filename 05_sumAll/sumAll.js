const sumAll = function(initialValue, endValue) {
    if (initialValue < 0 || endValue < 0 || typeof initialValue !== "number" || typeof endValue !== "number") return "ERROR"
    if (initialValue > endValue) {
        const tempValue = endValue;
        endValue = initialValue;
        initialValue = tempValue;
    }

    let result = 0;
    for (let i = initialValue; i <= endValue; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
