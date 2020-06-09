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

  assertResult({ stack: [x] }) {
    if (!Number.isFinite(x)) {
      throw new Error('Result must be finite');
    }
  }

  execOperation(state, operation, operand) {
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

    this.assertResult(newState);

    const stackLift = !ALUController.stackLiftDisablers.has(operation.opcode);
    return { ...newState, stackLift, buffer: '' };
  }
}

export default ALUController;
