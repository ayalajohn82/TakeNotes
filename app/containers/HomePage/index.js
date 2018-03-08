import React from 'react';
import PropTypes from 'prop-types';
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
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="add a some words">Add some Words to storage</label>
          <input id="words" type="text" placeholder="Your words!" value={this.props.userInput} onChange={this.props.onChangeInput} />
        </form>
      </div>
    );
  }
}

HomePage.propTypes = {
  onSubmit: PropTypes.func,
  userInput: PropTypes.string,
  onChangeInput: PropTypes.func,
};
