import React from 'react';
import { render } from '@testing-library/react';
import Message from './Message';

test('renders content correctly', () => {
  const message = {
    id: 1,
    owner: 1,
    room: {
      id: 1,
      uri: 'test',
      name: 'Test',
      date: new Date()
    },
    content: 'Test content',
    date: new Date(),
    isPrivate: false
  };
  const user = {
    id: 1,
    uri: 'test',
    name: 'Test'
  };

  const { getByText } = render(<Message message={message} user={user} />);
  const linkElement = getByText(/Test content/i);
  expect(linkElement).toBeInTheDocument();
});
