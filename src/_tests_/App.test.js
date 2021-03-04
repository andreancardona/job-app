import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import App from '../components/App';

it('renders without crashing - hopefully', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('The <App /> component', () => {
  
  it('should not fail any accessibility tests', async () => {
    const { container } = render(<App />);
    expect(await axe(container)).toHaveNoViolations();
  });
  
});