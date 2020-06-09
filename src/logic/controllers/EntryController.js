import BaseController from './BaseController';

class EntryController extends BaseController {
  liftStack(stack) {
    const [x, y, z] = stack;
    return [x, x, y, z];
  }

  execOperation(state, operation) {
    const { stackLift } = state;
    let { buffer, stack } = state;

    switch (operation.type) {
      case 'entry': {
        // Unless a previous operation disabled the 'liftStack' state
        // we should lift the stack if the buffer is about to transition
        // from empty to non-empty as a result from executing an entry
        // operation.
        if (buffer === '' && stackLift) {
          stack = this.liftStack(stack);
        }

        buffer = operation.fn(buffer);

        const [, ...rest] = stack;
        return {
          ...state,
          stack: [parseFloat(buffer), ...rest],
          buffer,
        };
      }
      default:
        throw new Error(`unsupported operation type: ${operation.type}`);
    }
  }
}

export default EntryController;
