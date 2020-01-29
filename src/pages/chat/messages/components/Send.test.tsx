import React from 'react';
import { render } from '@testing-library/react';
import Send from './Send';

test('renders correctly', () => {
  const send = function(): void {};
  const user = {
    id: 1,
    uri: 'test',
    name: 'Test'
  };

  const { getByTitle } = render(<Send send={send} user={user} />);
  const linkElement = getByTitle(/Private message/i);
  expect(linkElement).toBeInTheDocument();
});
