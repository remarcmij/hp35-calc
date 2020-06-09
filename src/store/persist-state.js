import initialState from '../logic/initialState';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('@hp35/state') ?? initialState;
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

export const saveState = (state) => {
  localStorage.setItem('@hp35/state', JSON.stringify(state));
};
