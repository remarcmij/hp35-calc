class InstructionSet {
  operations = {};

  addOperations(operations) {
    Object.assign(this.operations, operations);
  }

  getOperation(opcode) {
    const operation = this.operations[opcode];
    if (!operation) {
      throw new Error(`invalid opcode: ${opcode}`);
    }
    return operation;
  }
}

export default InstructionSet;
