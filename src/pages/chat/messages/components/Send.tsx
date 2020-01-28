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
  onSend: (message: PartialChatMessage) => void;
  user: User;
}

const Send: React.FC<SendProps> = ({ onSend, user }) => {
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const onClick = (): void => {
    onSend({
      content,
      date: new Date(),
      isPrivate
    });
    setContent('');
  };

  const onEnter = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.keyCode === 13 && content.trim() !== '') {
      onClick();
    }
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      value={content}
      onChange={(e): void => setContent(e.target.value)}
      onKeyUp={onEnter}
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
              value="checkedA"
              title="Private message"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              onClick={(): void => setIsPrivate(!isPrivate)}
            />
            <IconButton title="Send" onClick={onClick}>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

Send.propTypes = {
  onSend: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    uri: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Send;
