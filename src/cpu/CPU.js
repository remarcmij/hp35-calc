import EntryController from './EntryController';
import ALU from './ALU';
import entryOperations from './operations/entry-operations';
import aluOperations from './operations/alu-operations';

class CPU {
  operations = { ...entryOperations, ...aluOperations };

  controllers = [
    new EntryController(this.operations),
    new ALU(this.operations),
  ];

  execute(state, opcode) {
    return this.controllers.reduce(
      (acc, controller) => controller.execute(acc, opcode),
      state
    );
  }

  getOperation(opcode) {
    const operation = this.operations[opcode];
    if (!operation) {
      throw new Error(`Unrecognized opcode: ${opcode}`);
    }
    return operation;
  }
}

export default CPU;
