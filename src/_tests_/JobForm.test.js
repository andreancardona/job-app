import React from 'react';
import renderer from 'react-test-renderer';
import JobForm from '../components/JobForm';

 // Initial job
 const job = {
  job: { id: 1, title: 'Product Manager', location: 'Austin, TX', posted: '10/04/2020', sponsorship: 'Free', status: 'Open' },
}

describe('The <JobForm /> component', () => {
  test('JobForm renders with nav props', () => {
    const tree = renderer.create(<JobForm job={job}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});