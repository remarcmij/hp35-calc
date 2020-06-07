import C from '../../shared/opcodes';

const stackLiftDisablers = new Set([C.ENTER, C.CLX, C.STO]);

const executeMonadic = (fn, { stack: [x, y, z, t], ...rest }) => {
  return { stack: [fn(x), y, z, t], ...rest };
};

const executedDyadic = (fn, { stack: [x, y, z, t], ...rest }) => {
  return { stack: [fn(x, y), z, t, t], ...rest };
};

const executeStack = (fn, { stack, ...rest }) => {
  return { stack: fn(stack), ...rest };
};

const executeState = (fn, state) => {
  return fn(state);
};

const pushOperand = (state, operand) => {
  const {
    stack: [x, y, z],
    ...rest
  } = state;
  return { ...rest, stack: [operand, x, y, z] };
};

export default (state, operation, opcode) => {
  if (typeof operation === 'number') {
    const operand = operation;
    return pushOperand(state, operand);
  }

  const newState = {
    ...state,
    stackLift: !stackLiftDisablers.has(opcode),
  };

  switch (operation.type) {
    case 'monadic':
      return executeMonadic(operation.fn, newState);
    case 'dyadic':
      return executedDyadic(operation.fn, newState);
    case 'stack':
      return executeStack(operation.fn, newState);
    case 'state':
      return executeState(operation.fn, newState);
    default:
      return state;
  }
};
