import React           from 'react';
import ReactDOM        from 'react-dom';

import App   from 'components/App';
import Redux from 'providers/Redux';

ReactDOM.render(
  <Redux>
    <App />
  </Redux>,
  document.getElementById('root')
);
