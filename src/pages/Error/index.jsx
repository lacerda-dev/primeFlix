import React from 'react';
import {Link} from 'react-router-dom';
import './error.css';

export const Error = () => {
  return (
    <div className='not-found'>
        <h1>404</h1>
        <p>Página não encontrada</p>
        <Link to='/'>Veja nossos filmes</Link>
    </div>
  )
}
