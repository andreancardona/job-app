import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import JobForm from '../components/JobForm';

describe('The <JobForm /> component', () => {
  test('JobForm renders', () => {
    const tree = renderer.create(<JobForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Job Form should not fail any accessibility tests', async () => {
    const { container } = render(<JobForm />);
    expect(await axe(container)).toHaveNoViolations();
  })
});
