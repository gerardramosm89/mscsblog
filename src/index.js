import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/main.scss';

import {
  BrowserRouter,
  Route,
  Switch, 
  Link
} from 'react-router-dom';

// Components
import BlogsIndex from './components/blogs/blogs_index';
import BlogsNew from './components/blogs/blogs_new';
import ImageUpload from './components/image_upload';
import SignIn from './components/user_pages/SignIn';
import SignUp from './components/user_pages/SignUp';
import Navbar from './components/navbar';
import Home from './components/home';
import LearningPaths from './components/learning_paths';
import Dashboard from './components/user_pages/Dashboard';
import EditBlog from './components/blogs/blogs_edit.js';
import ViewBlog from './components/blogs/ViewBlog';
import StatisticalLearning from './components/blogs/StatisticalLearning';
import Playground from './components/playground';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(promise)
));

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={store}>  
    <BrowserRouter>
      <div>
        <Navbar /> 
        <Switch>
          <Route path="/blogs/new" component={BlogsNew} />
          <Route path="/blogs/edit/:id" component={EditBlog} />
          <Route path="/blogs/:id" component={ViewBlog} />          
          <Route path="/imageupload" component={ImageUpload} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/blogs" component={BlogsIndex} />
          <Route path="/learningpaths" component={LearningPaths} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/statistical-learning" component={StatisticalLearning} />
          <Route path="/playground" component={Playground} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);