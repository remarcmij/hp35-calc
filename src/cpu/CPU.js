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
    if (typeof opcode === 'number') {
      operation = opcode;
    } else {
      const code =
        opcode === C.CHS && state.buffer !== '' ? C.CHS_BUFFER : opcode;
      operation = this.getOperation(code);
    }

    const newState = this.operationHandlers.reduceRight(
      (acc, operationHandler) => operationHandler(acc, operation, opcode),
      state
    );

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
