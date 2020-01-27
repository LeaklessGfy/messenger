import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

import { ChatMessage, PartialChatMessage } from '../../../entities/ChatMessage';
import { AuthContext } from '../../../services/auth';

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
  messages: ChatMessage[];
  onSend: (partial: PartialChatMessage) => void;
}

const Messages: React.FC<MessagesProps> = ({ messages, onSend }) => {
  const { userId } = useContext(AuthContext);
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <ul className={classes.ul}>
        {messages.map(message => (
          <li
            key={message.id}
            className={clsx(
              classes.li,
              message.owner === userId && classes.liOwned
            )}
          >
            <Message message={message} isOwned={message.owner === userId} />
          </li>
        ))}
      </ul>

      <Send onSend={onSend} />
    </section>
  );
};

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  onSend: PropTypes.func.isRequired
};

export default Messages;
