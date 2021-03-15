import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Navigation from '../components/Navigation';

 // Navigation props
 const navProps = {
  title: 'JobHob',
  userName: 'Andrea Cardona',
  userRole: 'Admin'
}

describe('The <Navigation /> component', () => {
  test('Navigation renders with Navigation props', () => {
    const tree = renderer.create(<Navigation props={navProps}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('Job should not fail any accessibility tests', async () => {
    const { container } = render(<Navigation props={navProps}/>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
