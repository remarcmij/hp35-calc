class CPU {
  assertResult({ stack: [x] }) {
    if (!Number.isFinite(x)) {
      throw new Error('Result must be finite');
    }
  }

  controllers = [];

  addController(controller) {
    this.controllers.push(controller);
  }

  execute(state, opcode) {
    try {
      const finalState = this.controllers.reduceRight(
        (newState, controller) => controller.execute(newState, opcode),
        state
      );
      this.assertResult(finalState);
      return { ...finalState, lastOpcode: opcode };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
      return { ...state, error: true };
    }
  }
}

export default CPU;
