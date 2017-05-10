import { combineReducers } from 'redux';
import BlogsReducer from './blogs_reducer'
import NewBlogReducer from './newblog_reducer';
import SignInReducer from './signin_reducer';

const rootReducer = combineReducers({
  blogs: BlogsReducer,
  newBlog: NewBlogReducer,
  token: SignInReducer
});

export default rootReducer;
