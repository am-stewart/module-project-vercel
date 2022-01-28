import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Banff from './components/Banff';
import CapeCod from './components/CapeCod';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/banff'>Banff</Link>
          <Link to='/capecod'>Cape Cod</Link>
        </nav>
      </header>

      <Switch>
        <Route exact path='/capecod'>
          <CapeCod />
        </Route>
        <Route exact path='/banff'>
          <Banff />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
