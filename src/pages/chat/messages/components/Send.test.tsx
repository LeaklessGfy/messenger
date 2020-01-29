import React from 'react';
import { render } from '@testing-library/react';
import Send from './Send';

test('renders correctly', () => {
  let count = 0;
  const send = function(): void {
    count++;
  };
  const user = {
    id: 1,
    uri: 'test',
    name: 'Test'
  };

  const { getByTitle } = render(<Send send={send} user={user} />);
  const linkElement = getByTitle(/Private message/i);
  expect(linkElement).toBeInTheDocument();
  expect(count).toBe(0);
});
