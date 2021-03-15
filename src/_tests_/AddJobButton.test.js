import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import AddJobButton from '../components/AddJobButton';

describe('The <AddJobButton /> component', () => {
  test('AddJobButton renders with AddJobButton props', () => {
    const tree = renderer.create(<AddJobButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('AddJobButton should not fail any accessibility tests', async () => {
    const { container } = render(<AddJobButton />);
    expect(await axe(container)).toHaveNoViolations();
  })
});
