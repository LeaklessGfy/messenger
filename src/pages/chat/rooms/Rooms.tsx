import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcron from '@material-ui/icons/Search';

import { ChatRoom } from '../../../entities/ChatRoom';

import Room from './components/Room';

interface RoomsProps {
  rooms: ChatRoom[];
}

const Rooms: React.FC<RoomsProps> = ({ rooms }) => {
  const { uri } = useParams();
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

  useEffect(() => setVisibleRooms(rooms), [rooms]);

  return (
    <List
      component="nav"
      subheader={
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
      }
    >
      {visibleRooms.map(room => (
        <div key={room.id}>
          <Room room={room} uri={uri} />
          <Divider variant="middle" component="li" />
        </div>
      ))}
    </List>
  );
};

Rooms.propTypes = {
  rooms: PropTypes.array.isRequired
};

export default Rooms;
