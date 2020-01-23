import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import ChatMessage from '../../../entities/ChatMessage';
import { fetchChatMessages } from '../../../services/api';

import Message from './components/Message';
import Send from './components/Send';

const useStyles = makeStyles({
  ul: {
    listStyle: 'none'
  },
  li: {
    marginTop: '5px'
  }
});

const Messages: React.FC = () => {
  const { uri } = useParams();
  const [ messages, setMessages ] = useState<ChatMessage[]>([]);
  const classes = useStyles();

  useEffect(() => {
    if (uri === undefined) {
      return; // redirect;
    }

    fetchChatMessages(uri)
    .then(messages => setMessages(messages));
  });

  return (
    <React.Fragment>
      <ul className={classes.ul}>
        {messages.map(message => (
          <li key={message.id} className={classes.li}>
            <Message message={message} />
          </li>
        ))}
      </ul>

      <Send />
    </React.Fragment>
  );
}

export default Messages;
