import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import { ChatMessage } from '../../../../entities/ChatMessage';

const useStyles = makeStyles({
  card: {
    maxWidth: '500px',
    height: 'fit-content',
    marginLeft: '5px',
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
  message: ChatMessage;
  isOwned: boolean;
}

const Message: React.FC<MessageProps> = ({ isOwned, message }) => {
  const classes = useStyles();

  return (
    <>
      {!isOwned ? <Avatar>K</Avatar> : null}
      <Card className={clsx(classes.card, isOwned && classes.cardOwned)}>
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
    </>
  );
};

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.number.isRequired,
    room: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    isPrivate: PropTypes.bool.isRequired
  }).isRequired,
  isOwned: PropTypes.bool.isRequired
};

export default Message;
