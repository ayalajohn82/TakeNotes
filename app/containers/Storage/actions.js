/**
 * Load the Notes from DB, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_NOTES
 */
export function loadNotes() {
  return {
    type: 'LOAD_NOTES',
  };
}

/**
 * Dispatched when the Notes are loaded by the request saga
 *
 * @param  {array}  notes The Notes data
 *
 * @return {object} An action object with a type of NOTES_LOADED passing the Notes
 */
export function notesLoaded(notes) {
  return {
    type: 'NOTES_LOADED',
    notes,
  };
}

