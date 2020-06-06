import C from '../../shared/opcodes';

const noop = (state) => state;

export default {
  [C.NOOP]: { type: 'state', fn: noop },
};
