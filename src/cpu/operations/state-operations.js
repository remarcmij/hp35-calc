const noop = (state) => state;

export default {
  NOOP: { type: 'state', fn: noop },
};
