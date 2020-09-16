import React from 'react';
import Hello from '../../app/javascript/packs/Hello';

it('Hello', () => {
  const wrapper = shallow(<Hello name="Dan" />);
  expect(wrapper.render()).toMatchSnapshot();
});
