import React from 'react';
import { useParams } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import ChatRoom from '../../../../entities/ChatRoom';

interface RoomProps {
  room: ChatRoom
}

const Room: React.FC<RoomProps> = props => {
  const { uri } = useParams();

  return (
    <ListItem button selected={props.room.uri === uri}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.room.name} secondary={props.room.date.toUTCString()} />
    </ListItem>
  );
}

export default Room;
