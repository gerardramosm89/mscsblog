import { combineReducers } from 'redux';
import BlogsReducer from './blogs_reducer'
import NewBlogReducer from './newblog_reducer';

const rootReducer = combineReducers({
  blogs: BlogsReducer,
  newBlog: NewBlogReducer
});

export default rootReducer;
