import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { PartialChatMessage } from '../../../../entities/ChatMessage';

interface SendProps {
  onSend: (message: PartialChatMessage) => void;
}

const Send: React.FC<SendProps> = ({ onSend }) => {
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
            <AccountCircle />
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
  onSend: PropTypes.func.isRequired
};

export default Send;
