import React from 'react';
import { shallow } from 'enzyme';
import * as JobContex from '../context/JobContext';
import Navigation from '../components/Navigation';

// Navigation information
const navInfo = {
  title: 'JobHob',
  userName: 'Andrea Cardona',
  userRole: 'Admin'
}

describe('<Navigation />', () => {
  test('it should mock the context & return a title, userName and userRole', () => {
    const contextValues = { 
      navInfo,
    };
    jest
      .spyOn(JobContex, 'useJobContext')
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Navigation />);
    const navTitle = wrapper.find({className: 'nav-title'});
    const navUserName = wrapper.find({className: 'user-profile--name'});
    const navUserRole = wrapper.find({className: 'user-profile--role'});

    expect(navTitle).toHaveLength(1)
    expect(navUserName).toHaveLength(1)
    expect(navUserRole).toHaveLength(1)
  });
});