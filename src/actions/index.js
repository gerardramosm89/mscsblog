import axios from 'axios';

// const Variables
const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=01211989'

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