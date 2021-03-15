import React from 'react';
import renderer from 'react-test-renderer';
import JobForm from '../components/JobForm';
import EditJob from '../components/EditJob';


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

// const props = {
//   isFetching: false,
//   dispatch: jest.fn(),
//   selectedSubreddit: 'reactjs',
//   posts: []
// }
// const wrapper = shallow(<App {...props} />)
// // Query for the Picker component in the rendered output
// const PickerComponent = wrapper.find(Picker)
// expect(PickerComponent.props().value).toBe(props.selectedSubreddit)