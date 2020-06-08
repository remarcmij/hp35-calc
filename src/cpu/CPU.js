import C from '../shared/opcodes';
import InstructionSet from './InstructionSet';

class CPU {
  operationHandlers = [];

  instructionSet = new InstructionSet();

  addOperations(operations) {
    this.instructionSet.addOperations(operations);
  }

  addOperationHandler(handler) {
    this.operationHandlers.push(handler);
  }

  execute(state, opcode) {
    let operation;
    let operand = null;
    if (typeof opcode === 'number') {
      operand = opcode;
      operation = this.getOperation(C.PUSH);
    } else {
      const code =
        opcode === C.CHS && state.buffer !== '' ? C.CHS_BUFFER : opcode;
      operation = this.getOperation(code);
    }

    let newState;

    try {
      newState = this.operationHandlers.reduceRight(
        (acc, operationHandler) => operationHandler(acc, operation, operand),
        state
      );
    } catch (_) {
      newState = { ...state, error: true };
    }

    return {
      ...newState,
      lastOpcode: opcode,
    };
  }

  getOperation(opcode) {
    return this.instructionSet.getOperation(opcode);
  }
}

export default CPU;
