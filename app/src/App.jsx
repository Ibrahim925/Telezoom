import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './components/Homepage.jsx';
import Chat from './components/Chat.jsx';

const App = () => {
      return (
            <Router>
                  <Route path='/' exact component={Homepage} />
                  <Route path='/Chat' component={Chat} />
            </Router>
      )
}

export default App;