import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUserInput = () => createSelector(
  selectHome,
  (homeState) => homeState.get('userInput')
);

export {
  selectHome,
  makeSelectUserInput,
};
