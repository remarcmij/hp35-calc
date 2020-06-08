import { TOGGLE_ARC_MODE } from './constants';

const initialState = {
  arcMode: false,
};

// eslint-disable-next-line no-unused-vars
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_ARC_MODE:
      return { ...state, arcMode: !state.arcMode };
    default:
      return state;
  }
};

export default reducer;
