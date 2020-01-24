import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ChatMessage from '../../../../entities/ChatMessage';

const useStyles = makeStyles({
  card: {
    maxWidth: '500px',
    fontWeight: 'bold',
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
  }
});

interface MessageProps {
  message: ChatMessage;
  isOwned: boolean;
}

const Message: React.FC<MessageProps> = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card + ' ' + (props.isOwned ? classes.cardOwned : '')}>
      <CardContent className={classes.cardContent}>
        <Typography variant="caption" component="p">
          {props.message.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
