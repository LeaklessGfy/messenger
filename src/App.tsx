import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { AuthContext } from './services/auth';

import Chat from './pages/chat/Chat';

const App: React.FC = () => {
  const [userId] = useState(1);

  return (
    <Router>
      <AuthContext.Provider value={{ userId }}>
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
