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

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/blogs/new" component={BlogsNew} />
          <Route path="/imageupload" component={ImageUpload} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/blogs" component={BlogsIndex} />
          <Route path="/learningpaths" component={LearningPaths} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);