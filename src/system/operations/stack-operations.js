import C from '../../shared/opcodes';
import initialState from '../initialState';

const enter = ([x, y, z]) => [x, x, y, z];

const swap = ([x, y, z, t]) => [y, x, z, t];

const rollDown = ([x, y, z, t]) => [y, z, t, x];

const clearX = (state) => {
  const {
    stack: [, y, z, t],
    ...rest
  } = state;
  return { ...rest, stack: [0, y, z, t], error: false };
};

const clearAll = () => ({ ...initialState });

const push = ([x, y, z], operand) => {
  if (operand == null) {
    throw new Error('operand expected');
  }
  return [operand, x, y, z];
};

export default [
  { opcode: C.ENTER, type: 'stack', fn: enter },
  { opcode: C.SWAP, type: 'stack', fn: swap },
  { opcode: C.ROLL_DOWN, type: 'stack', fn: rollDown },
  { opcode: C.CLX, type: 'state', fn: clearX },
  { opcode: C.CLR, type: 'state', fn: clearAll },
  { opcode: C.PUSH, type: 'stack', fn: push },
];
