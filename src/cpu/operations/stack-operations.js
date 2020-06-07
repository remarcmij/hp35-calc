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

export default {
  [C.ENTER]: { type: 'stack', fn: enter },
  [C.SWAP]: { type: 'stack', fn: swap },
  [C.ROLL_DOWN]: { type: 'stack', fn: rollDown },
  [C.CLX]: { type: 'state', fn: clearX },
  [C.CLR]: { type: 'state', fn: clearAll },
};
