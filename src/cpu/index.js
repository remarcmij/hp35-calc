import CPU from './CPU';

export const initialState = {
  stack: [0, 0, 0, 0],
  error: null,
  buffer: '',
  stackLift: true,
};

export default new CPU();
