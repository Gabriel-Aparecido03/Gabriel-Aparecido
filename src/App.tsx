import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import './style/global.scss'

import { LandingPtBr } from './pages(pt-br)/Landing'
import { Contact } from './pages(pt-br)/Contact'
import { Projects } from './pages(pt-br)/Projects'
import { About } from './pages(pt-br)/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPtBr/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
