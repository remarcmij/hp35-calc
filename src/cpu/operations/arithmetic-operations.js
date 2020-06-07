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
  [C.ADD]: { type: 'dyadic', fn: add },
  [C.SUB]: { type: 'dyadic', fn: subtract },
  [C.MUL]: { type: 'dyadic', fn: multiply },
  [C.DIV]: { type: 'dyadic', fn: divide },
  [C.CHS]: { type: 'monadic', fn: changeSign },
  [C.PI]: { type: 'stack', fn: pi },
};
