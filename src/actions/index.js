import axios from 'axios';
// const Variables
const rootUrl = 'http://localhost:3050';
const apiKey = '?key=01211989'
const signInUrl = 'http://localhost:3050/api/userauth'
// Action Functions
export function fetchPosts(testData) {
  const request = axios.get(`${rootUrl}/posts${apiKey}`);
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}

export function createBlog(data) {
  const request = axios.post(`${rootUrl}/api/blogs/create`, data);
  return {
    type: 'NEW_BLOG',
    payload: request
  }
}

export function signIn(data) {
  const request = axios.post(`${signInUrl}`, data);
  return {
    type: 'SIGN_IN',
    payload: request
  }
}

export function signOut(data) {
  return {
    type: 'SIGN_OUT',
    payload: { message: 'signing out', token: null}
  }
}