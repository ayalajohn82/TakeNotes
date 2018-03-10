import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectUserNotes } from './selector';
import reducer from './reducer';
import { loadNotes } from './actions';
import saga from './saga';
import { Notes } from './notes';
import List from './list';
import Page from './notesPage';

export class Storage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.notes === false) {
      this.props.onLoad();
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Storage Page</title>
          <meta name="description" content="Storage page of String Saver App" />
        </Helmet>
        <Page>
          <h1>This the storage Page!!</h1>
          <List>
            <Notes notes={this.props.notes} />
          </List>
        </Page>
      </div>
    );
  }
}

Storage.propTypes = {
  notes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onLoad: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(loadNotes()),
});

const mapStateToProps = createStructuredSelector({
  notes: makeSelectUserNotes(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'storage', reducer });
const withSaga = injectSaga({ key: 'storage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
,
)(Storage);
