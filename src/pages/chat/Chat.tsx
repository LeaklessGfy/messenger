import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';

import { ChatRoom } from '../../entities/ChatRoom';
import {
  FullChatMessage,
  PartialChatMessage
} from '../../entities/ChatMessage';
import { useAuth } from '../../services/auth';
import { useNotification } from '../../services/notification';
import {
  sendMessageHelper,
  fetchRoomsHelper,
  fetchMessagesHelper
} from '../../services/utils';

import Rooms from './rooms/Rooms';
import Messages from './messages/Messages';

const DRAWER_WIDTH = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh'
  },
  appBar: {
    transition: 'all 1s cubic-bezier(0.4, 0, 0.6, 1)'
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: 'all 1s cubic-bezier(0, 0, 0.2, 1)'
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
    transition: 'margin-left 1s cubic-bezier(0.4, 0, 0.6, 1)',
    marginLeft: -DRAWER_WIDTH,
    marginTop: '70px',
    width: 'calc(100% - 240px)',
    height: 'calc(100% - 70px)'
  },
  contentShift: {
    transition: 'margin-left 1s cubic-bezier(0, 0, 0.2, 1)',
    marginLeft: 0
  }
}));

const Chat: React.FC = () => {
  const classes = useStyles();
  const [isOpenBar, setIsOpenBar] = useState(true);
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [messages, setMessages] = useState<FullChatMessage[]>([]);
  const user = useAuth();
  const { setNotification } = useNotification();
  const { uri } = useParams();

  const onSend = (partial: PartialChatMessage): void => {
    if (uri === undefined) return;
    sendMessageHelper(
      {
        ...partial,
        id: messages.length + 1,
        owner: user.id,
        room: uri
      },
      rooms,
      setMessages,
      setNotification
    );
  };

  useEffect(() => {
    fetchRoomsHelper(setRooms, setNotification);
  }, [setNotification]);

  useEffect(() => {
    if (uri === undefined || rooms.length === 0) return;
    fetchMessagesHelper(uri, rooms, setMessages, setNotification);
  }, [uri, rooms, setNotification]);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="secondary"
        className={clsx(classes.appBar, isOpenBar && classes.appBarShift)}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={(): void => setIsOpenBar(true)}
            edge="start"
            className={clsx(classes.menuButton, isOpenBar && classes.hide)}
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
        transitionDuration={1000}
        open={isOpenBar}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={(): void => setIsOpenBar(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />

        <Rooms rooms={rooms} />
      </Drawer>

      <main
        className={clsx(classes.content, isOpenBar && classes.contentShift)}
      >
        <Messages messages={messages} onSend={onSend} />
      </main>
    </div>
  );
};

export default Chat;
