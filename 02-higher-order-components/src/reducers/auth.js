import { TOGGLE_AUTH } from 'actions/types';

export default (state = false, { type, payload }) => {
  switch(type) {
    case TOGGLE_AUTH:
      return !state;
    default:
      return state;
  }
};