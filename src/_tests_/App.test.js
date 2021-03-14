import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from '../components/App';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import JobsList from '../components/JobsList';


// Navigation props
const navProps = {
  title: 'JobHob',
  userName: 'Andrea Batlle',
  userRole: 'Admin'
}

 // Initial list of jobs
 const jobs = [
  { id: 1, title: 'Product Manager', location: 'Austin, TX', posted: '10/04/2020', sponsorship: 'Free', status: 'Open' },
  { id: 2, title: 'CEO', location: 'Austin, TX', posted: '12/30/2020', sponsorship: 'Sponsored', status: 'Paused'},
  { id: 3, title: 'Software Engineer', location: 'Seattle, WA', posted: '11/18/2020', sponsorship: 'Free', status: 'Closed' },
]

describe('The <App /> component', () => {
  test('App renders without crashing - hopefully', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('App should not fail any accessibility tests', async () => {
    const { container } = render(<App />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('Navigation renders with nav props', () => {
    const tree = renderer.create(<Navigation props={navProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Header renders with header props', () => {
    const tree = renderer.create(<Header jobs={jobs}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('JobsList renders with JobsList props', () => {
    const tree = renderer.create(<JobsList jobs={jobs}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});