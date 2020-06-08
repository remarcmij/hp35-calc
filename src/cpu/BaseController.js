import C from '../shared/opcodes';

class BaseController {
  constructor(operations) {
    this.operations = new Map();
    operations.forEach((operation) =>
      this.operations.set(operation.opcode, operation)
    );
  }

  execute(state, opcode) {
    let operand = null;
    if (typeof opcode === 'number') {
      operand = opcode;
      // eslint-disable-next-line no-param-reassign
      opcode = C.PUSH;
    }

    const operation = this.getOperation(opcode);
    return this.execOperation(state, operation, operand);
  }

  execOperation(_state, _operation, _operand) {
    throw new Error('execute method must be overridden');
  }

  getOperation(opcode) {
    return this.operations.get(opcode);
  }
}

export default BaseController;
