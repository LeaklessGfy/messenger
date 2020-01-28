import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Link } from '@material-ui/core';

import { ChatRoom } from '../../../../entities/ChatRoom';

interface RoomProps {
  room: ChatRoom;
}

const Room: React.FC<RoomProps> = ({ room }) => {
  const { uri } = useParams();

  return (
    <Link href={'#/chat/' + room.uri} color="inherit" underline="none">
      <ListItem button selected={room.uri === uri}>
        <ListItemAvatar>
          <Avatar src={`${process.env.PUBLIC_URL}/img/${room.uri}.jpg`} />
        </ListItemAvatar>
        <ListItemText primary={room.name} secondary={room.date.toUTCString()} />
      </ListItem>
    </Link>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.number.isRequired,
    uri: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  }).isRequired
};

export default Room;
