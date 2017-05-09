import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/js/vendor/jquery.js';
import '../styles/js/vendor/foundation.js';
import '../styles/js/vendor/what-input.js';
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
        <h1>header</h1>
        <Link to="/">Home</Link>
        <Link to="/imageupload">Upload File</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        
        <Switch>
          <Route path="/blogs/new" component={BlogsNew} />
          <Route path="/imageupload" component={ImageUpload} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />          
          <Route path="/" component={BlogsIndex} />
        </Switch>

      </div>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);