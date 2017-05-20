if (localStorage.getItem('token')) {
  var currentToken = localStorage.getItem('token');
  var currentUser = localStorage.getItem('user');
} else {
  currentToken = null;
  currentUser = null;
}
export default function(state = { message: '', token: currentToken, user: currentUser}, action) {
  switch (action.type) {
    case 'SIGN_IN':
      console.log("action.payload.data from the reducer is: ", action.payload.data);
      localStorage.setItem('token', action.payload.data.token);
      localStorage.setItem('user', action.payload.data.user);
      return action.payload.data;
    case 'SIGN_OUT':
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('action.payload from sign out is: ', action.payload);
      return action.payload;
    default:
      return state;
  }
}