if (localStorage.getItem('token')) {
  var currentToken = localStorage.getItem('token');
  // var currentUser = localStorage.getItem('user');
} else {
  currentToken = null;
  // currentUser = null;
}
export default function(state = { message: '', token: currentToken}, action) {
  switch (action.type) {
    case 'SIGN_IN':
      localStorage.setItem('token', action.payload.data.token);
      return action.payload.data;
    case 'SIGN_OUT':
      localStorage.removeItem('token');
      return action.payload;
    default:
      return state;
  }
}