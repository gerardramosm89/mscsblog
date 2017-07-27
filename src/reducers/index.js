import { combineReducers } from 'redux';
import BlogsReducer from './blogs_reducer'
import NewBlogReducer from './newblog_reducer';
import SignInReducer from './signin_reducer';
import LearningPathReducer from './learning_paths_reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  router: routerReducer,
  blogs: BlogsReducer,
  newBlog: NewBlogReducer,
  token: SignInReducer,
  learningPathPosts: LearningPathReducer
});

export default rootReducer;
