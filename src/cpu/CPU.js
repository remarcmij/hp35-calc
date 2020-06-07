import InstructionSet from './InstructionSet';

class CPU {
  controllers = [];

  instructionSet = new InstructionSet();

  addOperations(operations) {
    this.instructionSet.addOperations(operations);
  }

  addController(controller) {
    controller.setCPU(this);
    this.controllers.push(controller);
  }

  execute(state, opcode) {
    const newState = this.controllers.reduceRight(
      (acc, controller) => controller.execute(acc, opcode),
      state
    );
    newState.lastOpcode = opcode;
    return newState;
  }

  getOperation(opcode) {
    return this.instructionSet.getOperation(opcode);
  }
}

export default CPU;
