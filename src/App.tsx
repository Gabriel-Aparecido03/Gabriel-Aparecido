import React from 'react';
import { HashRouter,Routes,Route } from 'react-router-dom'

import './style/global.scss'

import { LandingPtBr } from './pages(pt-br)/Landing'


function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<LandingPtBr/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
