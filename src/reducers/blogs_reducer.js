import _ from 'lodash';

export default function(state = { blogs: [] }, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      return _.mapKeys(action.payload.data, 'id');
    case 'FETCH_BLOGS':
      return { ...state, blogs: action.payload.data.blogs };
    case 'FETCH_ONE_POST':
      return { ...state, blog: action.payload}
    default:
      return state;
  }
}