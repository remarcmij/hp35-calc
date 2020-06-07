export default (state, operation) => {
  const {
    stack: [x, y, z, t],
    buffer,
    stackLift,
  } = state;

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
};
