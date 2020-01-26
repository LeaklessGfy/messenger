import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { PartialChatMessage } from '../../../../entities/ChatMessage';

const useStyles = makeStyles({
  send: {
    position: 'absolute',
    bottom: '10px',
    width: 'calc(100% - 245px)'
  }
});

interface SendProps {
  onSend: (message: PartialChatMessage) => void;
}

const Send: React.FC<SendProps> = props => {
  const classes = useStyles();
  const [ content, setContent ] = useState('');
  const [ isPrivate, setIsPrivate ] = useState(false);

  const onEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13 && content.trim() !== '') {
      onClick();
    }
  };

  const onClick = () => {
    props.onSend({
      content,
      date: new Date(),
      isPrivate
    });
    setContent('');
  };

  return (
    <TextField
      fullWidth
      className={classes.send}
      variant="outlined"
      value={content}
      onChange={e => setContent(e.target.value)}
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
              onClick={() => setIsPrivate(!isPrivate)}
            />
            <IconButton title="Send" onClick={onClick}>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}

export default Send;
