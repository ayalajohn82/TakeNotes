import React from 'react';
import { shallow } from 'enzyme';

import List from '../list';

describe('<List />', () => {
  it('should render an <ul> tag', () => {
    const renderedComponent = shallow(<List />);
    expect(renderedComponent.type()).toEqual('ul');
  });
});
