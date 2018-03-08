import React from 'react';
import { Helmet } from 'react-helmet';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="An App that saves your Strings Homepage" />
        </Helmet>
        <h1>
          Welcome to the Homepage
        </h1>
      </div>
    );
  }
}
