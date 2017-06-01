import _ from 'lodash';

export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_BY_LEARNING_PATH':
      console.log('fetched payload is: ', action.payload.data);
    //   return _.mapKeys(action.payload.data, 'postOrder');
      return action.payload.data;    
    default:
      return state;
  }
}