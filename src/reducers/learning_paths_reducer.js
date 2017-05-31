import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_BY_LEARNING_PATH':
      return action.payload.data;
    default:
      return state;
  }
}