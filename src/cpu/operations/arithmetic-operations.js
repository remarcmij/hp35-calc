const add = (x, y) => y + x;

const subtract = (x, y) => y - x;

const multiply = (x, y) => y * x;

const divide = (x, y) => {
  if (y === 0) {
    throw new Error('Division by zero');
  }
  return y / x;
};

const pi = ([x, y, z]) => [Math.PI, x, y, z];

const changeSign = (x) => -x;

export default {
  ADD: { type: 'binary', label: '+', fn: add },
  SUB: { type: 'binary', label: '-', fn: subtract },
  MUL: { type: 'binary', label: '×', fn: multiply },
  DIV: { type: 'binary', label: '÷', fn: divide },
  CHS: { type: 'unary', fn: changeSign },
  PI: { type: 'stack', label: 'PI', fn: pi },
};
