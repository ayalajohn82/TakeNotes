import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  notes: false,
});

export default function storageReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_NOTES':
      return state
        .set('loading', true)
        .set('notes', false);
    case 'NOTES_LOADED':
      return state
      .set('loading', false)
      .set('notes', action.notes);
    default:
      return state;
  }
}
