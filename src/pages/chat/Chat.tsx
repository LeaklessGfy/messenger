import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';

import Rooms from './rooms/Rooms';
import Messages from './messages/Messages';

const DRAWER_WIDTH = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  appBar: {
    transition: 'margin sharp 1s'
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: 'margin easeOut 1s'
  },
  menuButton: {
    marginRight: 2
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0
  },
  drawerPaper: {
    width: DRAWER_WIDTH
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: 1,
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: 3,
    transition: 'margin sharp 1s',
    marginLeft: -DRAWER_WIDTH,
    marginTop: '70px',
    width: 'calc(100% - 240px)',
    height: 'calc(100% - 140px)',
    overflowY: 'scroll'
  },
  contentShift: {
    transition: 'margin easeOut 1s',
    marginLeft: 0
  }
}));

const Chat: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="secondary"
        className={classes.appBar + ' ' + (open ? classes.appBarShift : '')}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={classes.menuButton + ' ' + (open ? classes.hide : '')}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Chat
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />

        <Rooms />
      </Drawer>

      <main
        className={classes.content + ' ' + (open ? classes.contentShift : '')}
      >
        <Messages />
      </main>
    </div>
  );
};

export default Chat;
