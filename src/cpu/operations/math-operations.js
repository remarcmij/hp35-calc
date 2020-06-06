import C from '../../shared/opcodes';

export default {
  [C.SIN]: { type: 'unary', fn: Math.sin },
  [C.ASIN]: { type: 'unary', fn: Math.asin },
};
