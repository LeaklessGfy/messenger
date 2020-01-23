import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ChatMessage from '../../../../entities/ChatMessage';

const useStyles = makeStyles({
  card: {
    maxWidth: '500px'
  },
  cardContent: {
    padding: '5px 10px !important'
  }
});

interface MessageProps {
  message: ChatMessage
}

const Message: React.FC<MessageProps> = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="caption" component="p">
          {props.message.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
