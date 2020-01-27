import React, { useState, useEffect } from 'react';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcron from '@material-ui/icons/Search';

import { ChatRoom } from '../../../entities/ChatRoom';
import { fetchChatRooms } from '../../../services/api';

import Room from './components/Room';

const Rooms: React.FC = () => {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [visibleRooms, setVisibleRooms] = useState<ChatRoom[]>([]);

  const onSearch = (token: string): void => {
    if (token.trim() === '') {
      setVisibleRooms(rooms);
    } else {
      setVisibleRooms(
        rooms.filter(
          room => room.name.toLowerCase().indexOf(token.toLowerCase()) !== -1
        )
      );
    }
  };

  useEffect(() => {
    fetchChatRooms().then(rooms => {
      setRooms(rooms);
      setVisibleRooms(rooms);
    });
  }, []);

  return (
    <List
      component="nav"
      subheader={
        <>
          <ListSubheader component="div">Chats</ListSubheader>
          <TextField
            variant="outlined"
            label="Search"
            size="small"
            margin="dense"
            onChange={(e): void => onSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton title="Send">
                    <SearchIcron />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </>
      }
    >
      {visibleRooms.map(room => (
        <div key={room.id}>
          <Room room={room} />
          <Divider variant="middle" component="li" />
        </div>
      ))}
    </List>
  );
};

export default Rooms;
