import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './favorites.css';
import {toast} from 'react-toastify'

export const Favorites = () => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const myList = localStorage.getItem('@primeFlix');
        setMovies(JSON.parse(myList) || [])
    }, []);

    function deleteMovies(id){
        let moviesFilter = movies.filter((item) => {
            return(item.id !== id)
        })

        setMovies(moviesFilter);
        localStorage.setItem('@primeFlix', JSON.stringify(moviesFilter));
        toast.success('Filme removido')
    };

  return (
    <div className='my-movies'>
        <h1>Meus Filmes</h1>

        {movies.length === 0 && <span>Você não tem filmes salvos na sua lista : ( </span>}

        <ul>
            {movies.map((item) => {
                return (
                    
                    <li key={item.id}>
                        <span>{item.title}</span>
                        <div>
                            <Link to={`/movie/${item.id}`}>Ver detalhes</Link>
                            <button onClick={() => deleteMovies(item.id)}>Excluir</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
