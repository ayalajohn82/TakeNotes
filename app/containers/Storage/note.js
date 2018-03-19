import React from 'react';
import PropTypes from 'prop-types';
import Notestyle from './notestyle';

const Note = (props) => (
  <Notestyle>
    <h2>Note #{props.num}</h2>
    <p>{props.note}</p>
  </Notestyle>
);


Note.propTypes = {
  note: PropTypes.string,
  num: PropTypes.number,
};

export default Note;

