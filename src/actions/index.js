import axios from 'axios';
// const Variables
const rootUrl = 'http://localhost:3050';
// const rootUrl = process.env.host;
console.log('rootUrl is: ');
const signInUrl = 'http://localhost:3050/api/userauth'

// Posts actions
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
export function fetchByLearningPath(data) {
  const request = axios.post(`${rootUrl}/api/learningpath`, data);
  request.then((response) => {
    console.log('response is: ', response.data);
  });
  console.log('fetchByLearningPath action');
  return {
    type: 'FETCH_BY_LEARNING_PATH',
    payload: request
  }
}
// Authentication actions
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