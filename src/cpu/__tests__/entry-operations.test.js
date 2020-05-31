import cpu, { initialState } from '..';

describe('Entry tests', () => {
  test('digits', () => {
    const opcodes = [
      'D1',
      'D2',
      'D3',
      'D4',
      'D5',
      'D6',
      'D7',
      'D8',
      'D9',
      'D0',
    ];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('1234567890');
  });

  test('decimal', () => {
    const opcodes = ['D1', 'D2', 'D3', 'DOT', 'D4', 'D5', 'D6'];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('123.456');
  });

  test('change mantissa sign', () => {
    const opcodes = ['D1', 'D2', 'D3', 'CHS'];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('-123');
  });

  test('enter exponent', () => {
    const opcodes = ['D1', 'D2', 'D3', 'EEX', 'D4'];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('123e+4');
  });

  test('change exponent sign', () => {
    const opcodes = ['D1', 'D2', 'D3', 'EEX', 'D4', 'CHS'];

    const state = opcodes.reduce(cpu.execute.bind(cpu), initialState);
    expect(state.buffer).toBe('123e-4');
  });
});
