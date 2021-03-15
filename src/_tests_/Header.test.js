import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Header from '../components/Header';

 // Initial list of jobs
 const jobs = [
  { id: 1, title: 'Product Manager', location: 'Austin, TX', posted: '10/04/2020', sponsorship: 'Free', status: 'Open' },
  { id: 2, title: 'CEO', location: 'Austin, TX', posted: '12/30/2020', sponsorship: 'Sponsored', status: 'Paused'},
  { id: 3, title: 'Software Engineer', location: 'Seattle, WA', posted: '11/18/2020', sponsorship: 'Free', status: 'Closed' },
]


describe('The <Header /> component', () => {
  test('Header renders with Header props', () => {
    const tree = renderer.create(<Header jobs={jobs}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('Job should not fail any accessibility tests', async () => {
    const { container } = render(<Header jobs={jobs}/>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
