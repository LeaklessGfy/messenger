import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { AuthContext } from './services/auth';

import Chat from './pages/chat/Chat';

const App: React.FC = () => {
  const [user] = useState({
    id: 1,
    uri: 'tom',
    name: 'Tom Ford'
  });

  return (
    <Router>
      <AuthContext.Provider value={user}>
        <CssBaseline />

        <Switch>
          <Route path="/chat/:uri" exact>
            <Chat />
          </Route>
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
