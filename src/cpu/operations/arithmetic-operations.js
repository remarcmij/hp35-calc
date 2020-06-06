import C from '../../shared/opcodes';

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
  [C.ADD]: { type: 'binary', fn: add },
  [C.SUB]: { type: 'binary', fn: subtract },
  [C.MUL]: { type: 'binary', fn: multiply },
  [C.DIV]: { type: 'binary', fn: divide },
  [C.CHS]: { type: 'unary', fn: changeSign },
  [C.PI]: { type: 'stack', fn: pi },
};
