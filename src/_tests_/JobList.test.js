import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import JobList from '../components/JobList';

describe('The <JobList /> component', () => {
  test('JobList renders', () => {
    const tree = renderer.create(<JobList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('JobList should not fail any accessibility tests', async () => {
    const { container } = render(<JobList />);
    expect(await axe(container)).toHaveNoViolations();
  })
});
