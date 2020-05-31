const enter = ([x, y, z]) => [x, x, y, z];

const swap = ([x, y, z, t]) => [y, x, z, t];

const rollDown = ([x, y, z, t]) => [y, z, t, x];

const clearX = () => 0;

export default {
  ENTER: { type: 'stack', fn: enter },
  SWAP: { type: 'stack', label: '𝑥↔︎𝑦', fn: swap },
  ROLL_DOWN: { type: 'stack', label: 'R↓', fn: rollDown },
  CLX: { type: 'unary', label: 'CL𝑥', fn: clearX },
};
