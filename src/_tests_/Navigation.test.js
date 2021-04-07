import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Navigation from '../components/Navigation';

describe('The <Navigation /> component', () => {
  test('Navigation renders', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('Job should not fail any accessibility tests', async () => {
    const { container } = render(<Navigation />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
