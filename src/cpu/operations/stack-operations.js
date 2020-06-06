import C from '../../shared/opcodes';

const enter = ([x, y, z]) => [x, x, y, z];

const swap = ([x, y, z, t]) => [y, x, z, t];

const rollDown = ([x, y, z, t]) => [y, z, t, x];

const clearX = () => 0;

export default {
  [C.ENTER]: { type: 'stack', fn: enter },
  [C.SWAP]: { type: 'stack', fn: swap },
  [C.ROLL_DOWN]: { type: 'stack', fn: rollDown },
  [C.CLX]: { type: 'unary', fn: clearX },
};
