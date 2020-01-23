import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ChatMessage from '../../../entities/ChatMessage';
import { fetchChatMessages } from '../../../services/api';

const Messages: React.FC = () => {
  const { uri } = useParams();
  const [ messages, setMessages ] = useState<ChatMessage[]>([]);

  useEffect(() => {
    if (uri === undefined) {
      // redirect;
      return;
    }

    fetchChatMessages(uri)
    .then(messages => setMessages(messages));
  });

  return (<React.Fragment/>);
}

export default Messages;
