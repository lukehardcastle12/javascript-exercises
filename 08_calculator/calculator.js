const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
  const totalNumber = numbers.reduce((total, number) => {
    return total + (number);
  },0);
  return totalNumber;
};

const multiply = function(...args) {
  let total=1;
  for(let i = 0; i < args.length; i++){
    total *= args[i];
  }
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
	let product = 1;
  for(let i = 0; i < number; i++){
    product *= (number - i);
  }
  return product;
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
