class EntryController {
  constructor(operations) {
    this.operations = operations;
  }

  execute(state, opcode) {
    const code = opcode === 'CHS' && state.buffer !== '' ? 'CHS_ENTRY' : opcode;
    const {
      stack: [x, y, z, t],
      buffer,
      stackLift,
    } = state;
    const operation = this.operations[code];
    switch (operation.type) {
      case 'entry': {
        const stack = buffer === '' && stackLift ? [x, x, y, z] : state.stack;
        return { ...state, stack, buffer: operation.fn(state.buffer) };
      }
      default:
        if (buffer === '') {
          return state;
        }
        return { ...state, stack: [parseFloat(buffer), y, z, t], buffer: '' };
    }
  }
}

export default EntryController;