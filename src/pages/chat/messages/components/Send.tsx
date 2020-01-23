import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  send: {
    position: 'fixed',
    bottom: 0,
    width: '83%'
  }
});

const Send: React.FC = () => {
  const classes = useStyles();

  return (
    <TextField
      fullWidth
      className={classes.send}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Switch
              checked={true}
              value="checkedA"
              title="Private message"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <IconButton title="Send">
              <SendIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}

export default Send;
