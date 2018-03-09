// import React from 'react';
// import { shallow } from 'enzyme';

import { mapDispatchToProps } from '../index';
import { changeInput } from '../actions';

describe('<HomePage />', () => {
  describe('mapDispatchToProps', () => {
    describe('onChangeInput', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeInput).toBeDefined();
      });

      it('should dispatch changeInput when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const input = 'A NOTE';
        result.onChangeInput({ target: { value: input } });
        expect(dispatch).toHaveBeenCalledWith(changeInput(input));
      });
    });

    describe('onSubmit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmit).toBeDefined();
      });
    });
  });
});
