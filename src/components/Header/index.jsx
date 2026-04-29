import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <div>
        <header>
            <Link className='logo' to='/'>Prime Flix</Link>
            <Link className='favorites' to='/favorites'>Meus Filmes</Link>
        </header>
    </div>
  )
}
