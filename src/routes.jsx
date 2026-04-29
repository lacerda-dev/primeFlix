import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Header } from './components/Header';
import { Error } from './pages/Error';
import { Favorites } from './pages/Favorites';


import React from 'react'

export const RoutesApp = () => {
  return (
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<Movies/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
        
      <Route path='*' element={<Error/>}/>
    </Routes>
    
  )
}
