import C from '../../shared/opcodes';

const noop = (state) => state;

export default [{ opcode: C.NOOP, type: 'state', fn: noop }];
