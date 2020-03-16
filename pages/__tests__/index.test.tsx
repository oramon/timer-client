import React from 'react';
import { mount } from 'enzyme';
import App from '../_app';

describe('index page', () => {
  it('should have App component', () => {
    const subject = mount(<App />);

    expect(subject.find('App')).toHaveLength(1);
  });
});
