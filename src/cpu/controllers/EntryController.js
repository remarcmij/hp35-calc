import BaseController from './BaseController';

class EntryController extends BaseController {
  execOperation(state, operation) {
    const {
      stack: [x, y, z, t],
      buffer,
      stackLift,
    } = state;

    if (!operation) {
      return buffer !== ''
        ? { ...state, stack: [parseFloat(buffer), y, z, t], buffer: '' }
        : state;
    }

    switch (operation.type) {
      case 'entry': {
        const stack = buffer === '' && stackLift ? [x, x, y, z] : state.stack;
        return { ...state, stack, buffer: operation.fn(state.buffer) };
      }
      default:
        throw new Error(`unsupported operation type: ${operation.type}`);
    }
  }
}

export default EntryController;
