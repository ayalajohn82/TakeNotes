import React from 'react';
import PropTypes from 'prop-types';
import Note from './note';
/* eslint-disable no-underscore-dangle */
export const Notes = (props) => {
  if (props.notes !== false) {
    return (
      <div>
        {props.notes.map((note, index) => <Note note={note.name} num={index + 1} key={note._id} />)}
      </div>
    );
  }
  return (<h2>No notes have been save.<br></br>Go to the home page to add notes</h2>);
};
/* eslint-enable */

Notes.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};
