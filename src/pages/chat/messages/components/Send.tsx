import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Avatar from '@material-ui/core/Avatar';

import { PartialChatMessage } from '../../../../entities/ChatMessage';
import { User } from '../../../../entities/User';

interface SendProps {
  send: (message: PartialChatMessage) => void;
  user: User;
}

const Send: React.FC<SendProps> = ({ send, user }) => {
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (content.trim() === '') {
      return;
    }
    send({
      content,
      date: new Date(),
      isPrivate
    });
    setContent('');
  };

  return (
    <form onSubmit={(e): void => onSubmit(e)}>
      <TextField
        fullWidth
        variant="outlined"
        value={content}
        onChange={(e): void => setContent(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Avatar
                title={user.name}
                src={`${process.env.PUBLIC_URL}/img/${user.uri}.jpg`}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Switch
                checked={isPrivate}
                title="Private message"
                onClick={(): void => setIsPrivate(!isPrivate)}
              />
              <IconButton title="Send" onClick={onSubmit}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  );
};

Send.propTypes = {
  send: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    uri: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Send;
