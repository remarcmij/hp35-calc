import { initialState } from '..';
import { UPDATE } from './constants';

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE:
      return payload;
    default:
      return state;
  }
};

export default reducer;
