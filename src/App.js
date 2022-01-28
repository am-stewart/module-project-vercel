import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Banff from './components/Banff';
import CapeCod from './components/CapeCod';
import WhiteMountains from './components/WhiteMountains';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/banff'>Banff</Link>
          <Link className='link' to='/capecod'>Cape Cod</Link>
          <Link className='link' to='/whitemountains'>White Mountains</Link>
        </nav>
      </header>

      <Switch>
        <Route exact path='/whitemountains'>
          <WhiteMountains />
        </Route>
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
