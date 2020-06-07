import cpu from '..';
import C from '../../shared/opcodes';
import initialState from '../initialState';

describe('Math tests', () => {
  test(C.ADD, () => {
    let state = { ...initialState, stack: [1, 2, 3, 4] };
    state = cpu.execute(state, 'ADD');
    expect(state.stack).toStrictEqual([3, 3, 4, 4]);
  });

  test(C.SUB, () => {
    let state = { ...initialState, stack: [1, 2, 3, 4] };
    state = cpu.execute(state, 'SUB');
    expect(state.stack).toStrictEqual([1, 3, 4, 4]);
  });
});
