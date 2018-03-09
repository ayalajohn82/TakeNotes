import React from 'react';
import PropTypes from 'prop-types';
import Notestyle from './notestyle';

const Note = (props) => (
  <Notestyle>
    <h2>Note #{props.num}</h2>
    <p>{props.note}</p>
  </Notestyle>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
Note.propTypes = {
  note: PropTypes.string,
  num: PropTypes.number,
};

export default Note;

