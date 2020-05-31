class ALU {
  static stackLiftDisablers = new Set(['ENTER', 'CLX']);

  constructor(operations) {
    this.operations = operations;
  }

  static executeUnary(fn, { stack: [x, y, z, t], ...rest }) {
    return { stack: [fn(x), y, z, t], ...rest };
  }

  static executeBinary(fn, { stack: [x, y, z, t], ...rest }) {
    return { stack: [fn(x, y), z, t, t], ...rest };
  }

  static executeStack(fn, { stack, ...rest }) {
    return { stack: fn(stack), ...rest };
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

    const operation = this.operations[opcode];

    let newState;

    switch (operation.type) {
      case 'unary':
        newState = ALU.executeUnary(operation.fn, state);
        break;
      case 'binary':
        newState = ALU.executeBinary(operation.fn, state);
        break;
      case 'stack':
        newState = ALU.executeStack(operation.fn, state);
        break;
      default:
        newState = state;
    }

    return { ...newState, stackLift: !ALU.stackLiftDisablers.has(opcode) };
  }
}

export default ALU;
