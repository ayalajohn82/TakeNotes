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
  return (<div></div>);
};
/* eslint-enable */

Notes.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
};
