import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { ChatMessage, PartialChatMessage } from '../../../entities/ChatMessage';
import { fetchChatMessages, sendChatMessage } from '../../../services/api';
import { useAuth } from '../../../services/auth';

import Message from './components/Message';
import Send from './components/Send';

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: '0'
  },
  li: {
    marginTop: '5px',
    display: 'flex'
  },
  liOwned: {
    justifyContent: 'flex-end'
  }
});

const Messages: React.FC = () => {
  const { uri } = useParams();
  const [ messages, setMessages ] = useState<ChatMessage[]>([]);
  const { userId } = useAuth();
  const classes = useStyles();
  
  const onSend = (partial: PartialChatMessage) => {
    if (uri === undefined) return;

    const message: ChatMessage = {
      ...partial,
      id: messages.length + 1,
      owner: userId,
      room: uri
    };

    sendChatMessage(message)
    .then(messages => setMessages(messages));
  };

  useEffect(() => {
    if (uri === undefined) {
      return; // redirect;
    }

    fetchChatMessages(uri)
    .then(messages => setMessages(messages));
  }, [uri]);

  return (
    <>
      <ul className={classes.ul}>
        {messages.map(message => (
          <li key={message.id} className={classes.li + ' ' + (message.owner === userId ? classes.liOwned : '')}>
            <Message message={message} isOwned={message.owner === userId} />
          </li>
        ))}
      </ul>

      <Send onSend={onSend} />
    </>
  );
}

export default Messages;
