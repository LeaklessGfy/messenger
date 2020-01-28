import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { FullChatMessage } from '../../../../entities/ChatMessage';
import { User } from '../../../../entities/User';

const useStyles = makeStyles({
  card: {
    maxWidth: '500px',
    height: 'fit-content',
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '5px',
    '&:hover': {
      backgroundColor: 'grey'
    }
  },
  cardOwned: {
    backgroundColor: 'rgb(255, 0, 136)',
    color: 'rgb(255, 255, 255)',
    '&:hover': {
      backgroundColor: 'rgb(255, 10, 100)'
    }
  },
  cardContent: {
    padding: '5px 10px !important'
  },
  typoPrivate: {
    fontStyle: 'italic'
  }
});

interface MessageProps {
  message: FullChatMessage;
  user: User;
}

const Message: React.FC<MessageProps> = ({ message, user }) => {
  const classes = useStyles();

  return (
    <>
      {!(user.id === message.owner) ? (
        <Avatar
          title={message.room.name}
          src={`${process.env.PUBLIC_URL}/img/${message.room.uri}.jpg`}
        />
      ) : null}
      <Card
        className={clsx(
          classes.card,
          user.id === message.owner && classes.cardOwned
        )}
      >
        <CardContent className={classes.cardContent}>
          <Typography
            variant="body2"
            component="p"
            className={message.isPrivate ? classes.typoPrivate : ''}
          >
            {message.content}
          </Typography>
        </CardContent>
      </Card>
      {user.id === message.owner ? (
        <Avatar
          title={user.name}
          src={`${process.env.PUBLIC_URL}/img/${user.uri}.jpg`}
        />
      ) : null}
    </>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.number.isRequired,
    room: PropTypes.shape({
      id: PropTypes.number.isRequired,
      uri: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired
    }).isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    isPrivate: PropTypes.bool.isRequired
  }).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    uri: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Message;
