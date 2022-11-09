const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length == 0)
    return 0;
  
  return arr.reduce((acc, current) => acc + current)
};

const multiply = function(arr) {
  if (arr.length == 0)
    return 0;

  return arr.reduce((acc, current) => acc * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a == 0) return 1;
  if (a == 1) return 1;

  return a * factorial(a - 1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
