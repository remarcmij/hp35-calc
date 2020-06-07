export default (state) => {
  const {
    stack: [x, y, z, t],
  } = state;

  if (Number.isFinite(x)) {
    return state;
  }

  return { ...state, stack: [0, y, z, t], error: true };
};
