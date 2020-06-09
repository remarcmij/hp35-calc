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

export default [
  { opcode: C.ADD, type: 'dyadic', fn: add },
  { opcode: C.SUB, type: 'dyadic', fn: subtract },
  { opcode: C.MUL, type: 'dyadic', fn: multiply },
  { opcode: C.DIV, type: 'dyadic', fn: divide },
  { opcode: C.CHS, type: 'monadic', fn: changeSign },
  { opcode: C.PI, type: 'stack', fn: pi },
];
