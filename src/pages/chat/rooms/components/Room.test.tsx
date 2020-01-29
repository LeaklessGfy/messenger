import React from 'react';
import { render } from '@testing-library/react';
import Room from './Room';

test('renders content correctly', () => {
  const room = {
    id: 1,
    uri: 'test',
    name: 'Test Room',
    date: new Date()
  };
  const uri = 'test';

  const { getByText } = render(<Room room={room} uri={uri} />);
  const linkElement = getByText(/Test Room/i);
  expect(linkElement).toBeInTheDocument();
});
