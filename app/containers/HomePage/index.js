import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import injectReducer from 'utils/injectReducer';
import { makeSelectUserInput } from './selectors';
import { changeInput } from './actions';
import reducer from './reducer';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          <label htmlFor="input">Add some words to the storage</label>
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

const onSubmit = (evt) => {
  if (evt !== undefined && evt.preventDefault) evt.preventDefault();
  console.log(evt.target[0].value);
  axios.post('/save', { value: evt.target[0].value })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
};

const mapDispatchToProps = (dispatch) => ({
  onChangeInput: (evt) => dispatch(changeInput(evt.target.value)),
  onSubmit,
});

const mapStateToProps = createStructuredSelector({
  userInput: makeSelectUserInput(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);
