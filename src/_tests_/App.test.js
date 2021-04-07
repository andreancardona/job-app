import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from '../components/App';
import Navigation from '../components/Navigation';
import JobList from '../components/JobList';
import JobForm from '../components/JobForm';
import JobProvider from '../context/JobContext';

render(<JobContext.Provider value={'a value that makes sense'}></JobContext.Provider>)

describe('The <App /> component', () => {
  test('App renders without crashing - hopefully', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  test('App should not fail any accessibility tests', async () => {
    const { container } = render(<App />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('Navigation renders', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('JobList renders', () => {
    const tree = renderer.create(<JobList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('JobsForm renders with JobsForm props', () => {
    const tree = renderer.create(<JobForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});