import { fromJS } from 'immutable';

const initialState = fromJS({
  userInput: '',
});


function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return state.set('userInput', action.input);
    default:
      return state;
  }
}

export default homeReducer;
