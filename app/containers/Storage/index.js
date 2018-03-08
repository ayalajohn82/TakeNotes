import React from 'react';
import { Helmet } from 'react-helmet';
import Note from './note';
import List from './list';
import Page from './notesPage';
import Writing from './writing';

export default class Storage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
            <li>
              <Note>
                <h2>Note #1</h2>
                <Writing>Input Content </Writing>
              </Note>
            </li>
          </List>
        </Page>
      </div>
    );
  }
}
