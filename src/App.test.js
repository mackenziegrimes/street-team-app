import { render } from '@testing-library/react';
import React from 'react';
import { describe } from 'riteway';

import App from './App';
// import render from 'riteway/render-component';

// ##default create-react-app
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  return true;
  // const linkElement = getByText(/terms/i);
  // expect(linkElement).toBeInTheDocument();
});

describe('App component', async assert => {
  const createApp = (props = {}) => render(<App {...props} />);

  {
    const props = {};
    const $ = createApp(props);

    assert({
      given: 'no props',
      should: 'render a button',
      actual: $('.btn').length,
      expected: 1,
    });
  }
});
