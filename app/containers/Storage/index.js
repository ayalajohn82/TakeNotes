import React from 'react';
import { Helmet } from 'react-helmet';

export default class Storage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Storage Page</title>
          <meta name="description" content="Storage page of String Saver App" />
        </Helmet>
        <h1>This the storage Page!!</h1>
      </div>
    );
  }
}
