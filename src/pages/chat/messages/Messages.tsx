import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import {
  FullChatMessage,
  PartialChatMessage
} from '../../../entities/ChatMessage';
import { useAuth } from '../../../services/auth';

import Message from './components/Message';
import Send from './components/Send';

const useStyles = makeStyles({
  section: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  ul: {
    listStyle: 'none',
    padding: '0',
    flexGrow: 1
  },
  li: {
    marginTop: '5px',
    display: 'flex'
  },
  liOwned: {
    justifyContent: 'flex-end'
  }
});

interface MessagesProps {
  messages: FullChatMessage[];
  onSend: (partial: PartialChatMessage) => void;
}

const Messages: React.FC<MessagesProps> = ({ messages, onSend }) => {
  const user = useAuth();
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <ul className={classes.ul}>
        {messages.map(message => (
          <li
            key={message.id}
            className={clsx(
              classes.li,
              message.owner === user.id && classes.liOwned
            )}
          >
            <Message message={message} user={user} />
          </li>
        ))}
      </ul>

      <Send onSend={onSend} user={user} />
    </section>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  onSend: PropTypes.func.isRequired
};

export default Messages;
