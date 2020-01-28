import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { Notification } from './entities/Notification';
import { AuthContext } from './services/auth';
import { NotificationContext } from './services/notification';

import Chat from './pages/chat/Chat';

const App: React.FC = () => {
  const [user] = useState({
    id: 1,
    uri: 'tom',
    name: 'Tom Ford'
  });
  const [notification, setNotification] = useState<Notification | null>(null);

  return (
    <Router>
      <AuthContext.Provider value={user}>
        <NotificationContext.Provider value={{ notification, setNotification }}>
          <CssBaseline />

          <Switch>
            <Route path="/chat/:uri" exact>
              <Chat />
            </Route>
          </Switch>

          <Snackbar
            open={notification !== null}
            autoHideDuration={6000}
            onClose={(): void => setNotification(null)}
          >
            {notification !== null ? (
              <Alert severity={notification.severity}>
                {notification.content}
              </Alert>
            ) : null}
          </Snackbar>
        </NotificationContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
