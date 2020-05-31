import cpu, { initialState } from '..';

describe('Math tests', () => {
  test('ADD', () => {
    let state = { ...initialState, stack: [1, 2, 3, 4] };
    state = cpu.execute(state, 'ADD');
    expect(state.stack).toStrictEqual([3, 3, 4, 4]);
  });

  test('SUB', () => {
    let state = { ...initialState, stack: [1, 2, 3, 4] };
    state = cpu.execute(state, 'SUB');
    expect(state.stack).toStrictEqual([1, 3, 4, 4]);
  });
});
