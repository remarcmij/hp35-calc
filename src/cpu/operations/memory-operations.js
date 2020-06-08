import C from '../../shared/opcodes';

const sto = (state) => {
  const {
    stack: [x],
  } = state;
  return { ...state, memory: x };
};

const rcl = (state) => {
  const {
    stack: [x, y, z, t],
    memory,
    lastOpcode,
  } = state;
  const stack = lastOpcode === C.STO ? [memory, y, z, t] : [memory, x, y, z];
  return { ...state, stack };
};

export default [
  { opcode: C.STO, type: 'state', fn: sto },
  { opcode: C.RCL, type: 'state', fn: rcl },
];
