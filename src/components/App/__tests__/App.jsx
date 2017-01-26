import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('components/App', () => {
  it('should have a title with "Hello world!"', () => {
    const component = shallow(<App />);
    const title = component.find('.App__title');

    expect(title.exists()).toBe(true);
    expect(title.is('h1')).toBe(true);
    expect(title.text()).toBe('Hello world!');
  });
});
