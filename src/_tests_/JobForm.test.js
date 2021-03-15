import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import JobForm from '../components/JobForm';

 // Initial job
 const job = {
  job: { id: 1, title: 'Product Manager', location: 'Austin, TX', posted: '10/04/2020', sponsorship: 'Free', status: 'Open' },
}

describe('The <JobForm /> component', () => {
  test('JobForm renders with JobForm props', () => {
    const tree = renderer.create(<JobForm job={job} />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('Job should not fail any accessibility tests', async () => {
    const { container } = render(<JobForm />);
    expect(await axe(container)).toHaveNoViolations();
  });

});
