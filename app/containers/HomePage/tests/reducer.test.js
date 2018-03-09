import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import { changeInput } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      userInput: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUserInput action correctly', () => {
    const fixture = 'A NOTE';
    const expectedResult = state.set('userInput', fixture);

    expect(homeReducer(state, changeInput(fixture))).toEqual(expectedResult);
  });
});
