// React
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  BrowserHistory,
  Route,
  Switch, 
  Link
} from 'react-router-dom';

import '../styles/main.scss';

// Material Design
import injectTabEventPlugin from 'react-tap-event-plugin';
injectTabEventPlugin();
// Components
import BlogsIndex from './components/blogs/blogs_index';
import BlogsNew from './components/blogs/blogs_new';
import ImageUpload from './components/image_upload';
import SignIn from './components/user_pages/SignIn';
import SignUp from './components/user_pages/SignUp';
import Home from './components/home';
import LearningPaths from './components/learning_paths';
import Dashboard from './components/user_pages/Dashboard';
import EditBlog from './components/blogs/blogs_edit.js';
import ViewBlog from './components/blogs/ViewBlog';
import StatisticalLearning2 from './components/blogs/StatisticalLearningv2';
import Playground from './components/playground';
import Navbar2 from './components/navbar2';
import Dashboardv2 from './components/user_pages/Dashboardv2';
import AlgorithmsPath from './components/blogs/AlgorithmsPath';
import DataStructuresPath from './components/blogs/DataStructuresPath';
import ArtificialIntelligencePath from './components/blogs/ArtificialIntelligencePath';
import HomeV2 from './components/homev2'
import StatisticalLearningv3 from './components/blogs/StatisticalLearningv3';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers/index';

// Middleware
import ReduxThunk from 'redux-thunk';

// React Router Redux
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
const history = createHistory();
const middlewareForReduxRouter = routerMiddleware(history);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(ReduxThunk, middlewareForReduxRouter, promise)
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>    
        <div>
          <Navbar2 />
          <Switch>
            <Route path="/blogs/new" component={BlogsNew} />
            <Route path="/blogs/edit/:id" component={EditBlog} />
            <Route path="/blogs/:id" component={ViewBlog} />
            <Route path="/imageupload" component={ImageUpload} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/blogs" component={BlogsIndex} />
            <Route path="/learningpaths" component={LearningPaths} />
            <Route path="/algorithms" component={StatisticalLearningv3} />
            <Route path="/artificial-intelligence" component={StatisticalLearningv3} />
            <Route path="/data-structures" component={StatisticalLearningv3} />
            <Route path="/statistical-learning" component={StatisticalLearningv3} />
            <Route path="/deep-learning" component={StatisticalLearningv3} />
            <Route path="/natural-language-processing" component={StatisticalLearningv3} />
            <Route path="/playground" component={Playground} />
            <Route path='/dashboard' component={Dashboardv2} />
            <Route path="/" component={HomeV2} />
          </Switch>
        </div>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);