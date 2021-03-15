import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import JobsList from '../components/JobsList';

// Initial list of jobs
const jobs = [
  { id: 1, title: 'Product Manager', location: 'Austin, TX', posted: '10/04/2020', sponsorship: 'Free', status: 'Open' },
  { id: 2, title: 'CEO', location: 'Austin, TX', posted: '12/30/2020', sponsorship: 'Sponsored', status: 'Paused'},
  { id: 3, title: 'Software Engineer', location: 'Seattle, WA', posted: '11/18/2020', sponsorship: 'Free', status: 'Closed' },
]

describe('The <JobsList /> component', () => {
  test('JobsList renders with JobsList props', () => {
    const tree = renderer.create(<JobsList jobs={jobs}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('JobsList should not fail any accessibility tests', async () => {
    const { container } = render(<JobsList jobs={jobs}/>);
    expect(await axe(container)).toHaveNoViolations();
  })
});
