import * as types from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case types.GET_TODOS:
      return { ...state, items: action.payload };
  }
  return state;
}
