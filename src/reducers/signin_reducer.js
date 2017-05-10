
export default function(state = {}, action) {
  switch (action.type) {
    case 'SIGN_IN':
      console.log("action.payload.data from the reducer is: ", action.payload.data);
      localStorage.setItem('token', action.payload.data.token);
      return action.payload.data;
    default:
      return state;
  }
}