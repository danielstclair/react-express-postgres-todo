import * as types from './types';
import axios from 'axios';

export function getTodos() {
  return function(dispatch) {
    axios.get('/api/todos')
      .then(({ data: { data } }) => {
        dispatch({
          type: types.GET_TODOS,
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
