import { render } from '@testing-library/react';
import React from 'react';
import { describe } from 'riteway';

import App from '../App';
// import render from 'riteway/render-component';

// ##default create-react-app
test('renders app', () => {
  // const { getByText } = render(<App />);

  // const linkElement = getByText(/terms/i);
  // expect(linkElement).toBeInTheDocument();
  expect(render(<App />));
});

describe('App component', async assert => {
  const createApp = (props = {}) => render(<App {...props} />);

  {
    const props = {};
    const $ = createApp(props);

    assert({
      given: 'no props',
      should: 'render a div',
      actual: $('.div').length,
      expected: 1,
    });
  }
});
