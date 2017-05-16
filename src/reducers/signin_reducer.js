if (localStorage.getItem('token')) {
  var currentToken = localStorage.getItem('token');
} else {
  currentToken = null;
}
export default function(state = { message: '', token: currentToken}, action) {
  switch (action.type) {
    case 'SIGN_IN':
      console.log("action.payload.data from the reducer is: ", action.payload.data);
      localStorage.setItem('token', action.payload.data.token);
      return action.payload.data;
    case 'SIGN_OUT':
      localStorage.removeItem('token');
      console.log('action.payload from sign out is: ', action.payload);
      return action.payload;
    default:
      return state;
  }
}