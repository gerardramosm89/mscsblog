import axios from 'axios';

// const Variables
const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=01211989'
const signInUrl = 'http://localhost:3050/api/userauth'
// Action Functions
export function fetchPosts(testData) {
  console.log("Fetch posts was called");
  const request = axios.get(`${rootUrl}/posts${apiKey}`);
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}

export function createBlog(data) {
  const request = axios.post(`${rootUrl}/posts${apiKey}`, data);
  return {
    type: 'NEW_BLOG',
    payload: request
  }
}

// SignIn Component actions
export function signIn(data) {
  console.log('data from sign in action is: ', data);
  const request = axios.post(`${signInUrl}`, data);
  return {
    type: 'SIGN_IN',
    payload: request
  }
}