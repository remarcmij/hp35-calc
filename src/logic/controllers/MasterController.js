import C from '../../shared/opcodes';

const opcodeMappings = {
  [C.CHS]: C.CHS_BUFFER,
};

class MasterController {
  controllers = [];

  addController(controller) {
    this.controllers.push(controller);
  }

  execute(state, opcode) {
    // eslint-disable-next-line no-param-reassign
    opcode = state.buffer !== '' ? opcodeMappings[opcode] || opcode : opcode;

    try {
      const finalState = this.controllers.reduceRight(
        (newState, controller) => controller.execute(newState, opcode),
        state
      );
      return { ...finalState, lastOpcode: opcode };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.message);
      return { ...state, error: true };
    }
  }
}

export default MasterController;
