import InstructionSet from './InstructionSet';

class CPU {
  controllers = [];

  instructionSet = new InstructionSet();

  addOperations(operations) {
    this.instructionSet.addOperations(operations);
  }

  addController(controller) {
    controller.setCPU(this);
    this.controllers.unshift(controller);
  }

  execute(state, opcode) {
    return this.controllers.reduce(
      (acc, controller) => controller.execute(acc, opcode),
      state
    );
  }

  getOperation(opcode) {
    return this.instructionSet.getOperation(opcode);
  }
}

export default CPU;
