import React from 'react';
import { useParams } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import ChatRoom from '../../../../entities/ChatRoom';

interface RoomProps {
  chatRoom: ChatRoom
}

const Room: React.FC<RoomProps> = props => {
  const { uri } = useParams();

  return (
    <ListItem key={props.chatRoom.id} button selected={props.chatRoom.uri === uri}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.chatRoom.name} secondary={props.chatRoom.date.toUTCString()} />
    </ListItem>
  );
}

export default Room;
