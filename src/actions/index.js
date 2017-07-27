import axios from 'axios';
import { push } from 'react-router-redux';
// const Variables
const rootUrl = 'http://mlhq.io:3050';
const signInUrl = 'http://mlhq.io:3050/api/userauth'


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

// Routing action, takes in a string as route i.e. route = 'blogs/post-title';

export function routePush(route) {
  return push(route)
}

// Modal Actions

export function toggleModal() {
  return {
    type: 'TOGGLE_MODAL'
  }
}