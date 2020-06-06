import cpu, { initialState } from '..';
import C from '../../shared/opcodes';

describe('Entry tests', () => {
  test('digits', () => {
    const opcodes = [
      C.D1,
      C.D2,
      C.D3,
      C.D4,
      C.D5,
      C.D6,
      C.D7,
      C.D8,
      C.D9,
      C.D0,
    ];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('1234567890');
  });

  test('decimal', () => {
    const opcodes = [C.D1, C.D2, C.D3, C.DECIMAL, C.D4, C.D5, C.D6];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('123.456');
  });

  test('change significand sign', () => {
    const opcodes = [C.D1, C.D2, C.D3, C.CHS];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('-123');
  });

  test('enter exponent', () => {
    const opcodes = [C.D1, C.D2, C.D3, C.EEX, C.D4];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('123e+4');
  });

  test('change exponent sign', () => {
    const opcodes = [C.D1, C.D2, C.D3, C.EEX, C.D4, C.CHS];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('123e-4');
  });
});
