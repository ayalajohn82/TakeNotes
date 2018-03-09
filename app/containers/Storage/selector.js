import { createSelector } from 'reselect';

const selectUserNotes = (state) => state.get('storage');

const makeSelectUserNotes = () => createSelector(
  selectUserNotes,
  (homeState) => homeState.get('notes'),
);

export {
  selectUserNotes,
  makeSelectUserNotes,
};
