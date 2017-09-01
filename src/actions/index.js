import axios from 'axios';
import { push } from 'react-router-redux';
// const Variables
let rootUrl = 'http://mlhq.io:3050';
let signInUrl = 'http://mlhq.io:3050/api/userauth';

const env = '';
if (env === 'dev') {
  rootUrl = 'http://localhost:3050';
  signInUrl = 'http://localhost:3050/api/userauth';
}
export function getEnvHostname() {
  if (env === 'dev') {
    return 'http://localhost:8081';
  }
  else return 'http://mlhq.io';
}

// Action to grab images from the server
export function fetchImages() {
  return dispatch => {
    axios.get(`${getEnvHostname()}/images`)
      .then((images) => {
        dispatch({ type: 'FETCH_IMAGES', payload: { images } })
      })
  }
}
// Following function verifies if the current 

export function verifyToken() {
  let currentToken = localStorage.getItem('token');
  let data = { token: currentToken };
  let request = axios.post(`${rootUrl}/api/verifytoken`, data);
  return {
    type: 'VERIFY_TOKEN',
    payload: request
  }
}

// Blogs actions
export function fetchBlogs() {
  let token = localStorage.getItem('token');
  let request = axios.post(`${rootUrl}/api/queryblogs`, { token });

  return {
    type: 'FETCH_BLOGS',
    payload: request
  }
}

// Posts actions
export function fetchPosts(testData) {
  const request = axios.get(`${rootUrl}/posts${apiKey}`);
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}
export function createBlog(data, cb) {
  const request = axios.post(`${rootUrl}/api/blogs/create`, data);
  cb();
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

export async function updateBlog(updates) {
  const request = await axios.post(`${rootUrl}/api/updateOne`, updates);
  return {
    type: 'UPDATE_POST',
    payload: request.data
  }
}

export async function fetchOneBlog(data) {
  const request = await axios.post(`${rootUrl}/api/fetchone`, data);
  // const request = axios.post(`${rootUrl}/api/fetchone`, data);  
  return {
    type: 'FETCH_ONE_POST',
    payload: request.data
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
export function fetchToken() {
  let token = localStorage.getItem('token');
  return {
    type: 'FETCH_TOKEN',
    payload: { token }
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





/*---------------------------
Note for Redux-Thunk usage

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}

-------------------------*/