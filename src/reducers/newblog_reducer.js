import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case 'NEW_BLOG':
      return action.payload.data;
    default:
      return state;
  }
}