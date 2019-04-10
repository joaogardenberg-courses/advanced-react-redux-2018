import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk   from 'redux-thunk';

import {
  createStore,
  applyMiddleware
} from 'redux';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import reducers from './reducers';
import App      from './components/App';
import Welcome  from './components/Welcome';
import Signup   from './components/auth/Signup';
import Signin   from './components/auth/Signin';
import Signout  from './components/auth/Signout';
import Feature  from './components/Feature';

const initialState = {
  auth: {
    authenticated: localStorage.getItem('token')
  }
};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App>
        <Route exact path="/"        component={Welcome} />
        <Route       path="/signup"  component={Signup} />
        <Route       path="/signin"  component={Signin} />
        <Route       path="/signout" component={Signout} />
        <Route       path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
