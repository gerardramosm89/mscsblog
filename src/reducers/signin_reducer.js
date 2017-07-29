// let currentToken;
// const grabToken = localStorage.getItem('token');
// grabToken ? currentToken = grabToken : currentToken = null;

export default function(state = { message: '', token: null}, action) {
  switch (action.type) {
    case 'SIGN_IN':
      localStorage.setItem('token', action.payload.data.token);
      return action.payload.data;
    case 'SIGN_OUT':
      localStorage.removeItem('token');
      return { ...state , token: action.payload.token };
    case 'FETCH_TOKEN':
      return { ...state, token: action.payload.token }
    case 'VERIFY_TOKEN':
      console.log('token from verify token is: ', action.payload.data.token);
      return { ...state, token: action.payload.data.token }
    default:
      return state;
  }
}