import C from '../../shared/opcodes';
import BaseController from './BaseController';

class ALUController extends BaseController {
  static stackLiftDisablers = new Set([C.ENTER, C.CLX, C.STO]);

  executeMonadic(fn, { stack: [x, y, z, t], ...rest }) {
    return { stack: [fn(x), y, z, t], ...rest };
  }

  executeDyadic(fn, { stack: [x, y, z, t], ...rest }) {
    return { stack: [fn(x, y), z, t, t], ...rest };
  }

  executeStack(fn, { stack, ...rest }) {
    return { stack: fn(stack), ...rest };
  }

  executeState(fn, state) {
    return fn(state);
  }

  execOperation(state, operation, operand) {
    if (!operation) {
      return state;
    }

    const stackLift = !ALUController.stackLiftDisablers.has(operation.opcode);

    let newState;
    switch (operation.type) {
      case 'monadic':
        newState = this.executeMonadic(operation.fn, state);
        break;
      case 'dyadic':
        newState = this.executeDyadic(operation.fn, state);
        break;
      case 'stack':
        newState = this.executeStack(operation.fn, state, operand);
        break;
      case 'state':
        newState = this.executeState(operation.fn, state, operand);
        break;
      default:
        throw new Error(`unsupported operation type: ${operation.type}`);
    }

    return { ...newState, stackLift };
  }
}

export default ALUController;
