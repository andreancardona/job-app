import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import JobCard from '../components/JobCard';

// Initial list of jobs
const jobs = [
  { id: 1, title: 'Product Manager', location: 'Austin, TX', posted: '10/04/2020', sponsorship: 'Free', status: 'Open' },
  { id: 2, title: 'CEO', location: 'Austin, TX', posted: '12/30/2020', sponsorship: 'Sponsored', status: 'Paused'},
  { id: 3, title: 'Software Engineer', location: 'Seattle, WA', posted: '11/18/2020', sponsorship: 'Free', status: 'Closed' },
]

describe('The <JobCard /> component', () => {
  test('JobCard renders with JobCard props', () => {
    const tree = renderer.create(<JobCard jobs={jobs}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('JobCard should not fail any accessibility tests', async () => {
    const { container } = render(<JobCard jobs={jobs}/>);
    expect(await axe(container)).toHaveNoViolations();
  })
});
