import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Chat from './pages/chat/Chat';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />

      <Switch>
        <Route path="/chat/:uri">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
