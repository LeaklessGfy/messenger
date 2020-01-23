import React, { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import ChatRoom from '../../../entities/ChatRoom';
import { fetchChatRooms } from '../../../services/api';
import Room from './components/Room';

const Rooms: React.FC = () => {
  const [ chatRooms, setChatRooms ] = useState<ChatRoom[]>([]);

  useEffect(() => {
    fetchChatRooms()
    .then(chatRooms => setChatRooms(chatRooms));
  });

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Chats
        </ListSubheader>
      }
    >
      <Room chatRoom={{
        id: 0,
        uri: 'general',
        name: 'Général',
        date: new Date(),
        image: ''
      }} />

      {chatRooms.map(chatRoom => <Room chatRoom={chatRoom} />)}
    </List>
  );
}

export default Rooms;
