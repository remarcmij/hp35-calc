class InstructionSet {
  operations = new Map();

  addOperations(operations) {
    operations.forEach((operation) =>
      this.operations.set(operation.opcode, operation)
    );
  }

  getOperation(opcode) {
    const operation = this.operations.get(opcode);
    if (!operation) {
      throw new Error(`invalid opcode: ${opcode}`);
    }
    return operation;
  }
}

export default InstructionSet;
