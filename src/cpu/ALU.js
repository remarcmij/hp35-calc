import BaseController from './BaseController';

class ALU extends BaseController {
  static stackLiftDisablers = new Set(['ENTER', 'CLX']);

  static executeUnary(fn, { stack: [x, y, z, t], ...rest }) {
    return { stack: [fn(x), y, z, t], ...rest };
  }

  static executeBinary(fn, { stack: [x, y, z, t], ...rest }) {
    return { stack: [fn(x, y), z, t, t], ...rest };
  }

  static executeStack(fn, { stack, ...rest }) {
    return { stack: fn(stack), ...rest };
  }

  static executeState(fn, state) {
    return fn(state);
  }

  static pushOperand(state, operand) {
    const {
      stack: [x, y, z],
      ...rest
    } = state;
    return { ...rest, stack: [operand, x, y, z] };
  }

  execute(state, opcode) {
    if (typeof opcode === 'number') {
      const operand = opcode;
      return ALU.pushOperand(state, operand);
    }

    const operation = this.getOperation(opcode);

    const newState = {
      ...state,
      stackLift: !ALU.stackLiftDisablers.has(opcode),
    };

    switch (operation.type) {
      case 'unary':
        return ALU.executeUnary(operation.fn, newState);
      case 'binary':
        return ALU.executeBinary(operation.fn, newState);
      case 'stack':
        return ALU.executeStack(operation.fn, newState);
      case 'state':
        return ALU.executeState(operation.fn, newState);
      default:
        return state;
    }
  }
}

export default ALU;
