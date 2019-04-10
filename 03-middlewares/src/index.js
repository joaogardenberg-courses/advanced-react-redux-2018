import React           from 'react';
import ReactDOM        from 'react-dom';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import App   from 'components/App';
import Redux from 'providers/Redux';

ReactDOM.render(
  <Redux>
    <BrowserRouter>
      <Route path="/" component={ App } />
    </BrowserRouter>
  </Redux>,
  document.getElementById('root')
);
