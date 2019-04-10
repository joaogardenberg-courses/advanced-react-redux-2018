import React from 'react';

import requireAuth from '../hocs/requireAuth';

class Feature extends React.Component {
  render() {
    return (
      <div>
        Feature
      </div>
    );
  }
}

Feature = requireAuth(Feature);

export default Feature;