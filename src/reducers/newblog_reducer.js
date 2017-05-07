import _ from 'lodash';

console.log("newblog_reducer was loaded");

export default function(state = {}, action) {
  switch (action.type) {
    case 'NEW_BLOG':
      console.log("newblog_reducer action.payload.data", action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}