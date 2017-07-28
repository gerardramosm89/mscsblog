let currentToken;
const grabToken = localStorage.getItem('token');
grabToken ? currentToken = grabToken : currentToken = null;
console.log('currentToken is: ', currentToken);

export default function(state = { message: '', token: currentToken}, action) {
  switch (action.type) {
    case 'SIGN_IN':
      localStorage.setItem('token', action.payload.data.token);
      return action.payload.data;
    case 'SIGN_OUT':
      localStorage.removeItem('token');
      return action.payload;
    case 'FETCH_TOKEN':
    console.log('fetchtoken');
      return { ...state, token: action.payload.token }
    default:
      return state;
  }
}