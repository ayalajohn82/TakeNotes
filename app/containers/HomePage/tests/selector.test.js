import { fromJS } from 'immutable';

import { selectHome, makeSelectUserInput } from '../selector';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      userInput: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectUserInput', () => {
  const inputSelector = makeSelectUserInput();
  it('should select the username', () => {
    const userInput = 'A NOTE';
    const mockedState = fromJS({
      home: {
        userInput,
      },
    });
    expect(inputSelector(mockedState)).toEqual(userInput);
  });
});
