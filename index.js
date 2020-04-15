const calculator = {
  plus: (a, b) => {
    return a + b;
  },
  minus: (a, b) => {
    return a - b;
  },
  pow: (a, b) => {
    return a * b;
  },
  div: (a, b) => {
    return a / b;
  },
};

const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const pow = calculator.pow(5, 5);
const div = calculator.div(5, 5);
console.log(plus, minus, pow, div);
