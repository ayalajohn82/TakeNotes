import { changeInput } from '../actions';

describe('Home Actions', () => {
  describe('changeInput', () => {
    it('should return the correct type and the passed input', () => {
      const fixture = 'A NOTE';
      const expectedResult = {
        type: 'CHANGE_INPUT',
        input: fixture,
      };
      expect(changeInput(fixture)).toEqual(expectedResult);
    });
  });
});
