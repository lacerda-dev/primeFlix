import React from 'react';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=5909aca151764ef396baccdd1293a4aa

export const Home = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{

    async function loadMovies(){
      const response = await api.get('movie/now_playing',{
        params:{
          api_key: '5909aca151764ef396baccdd1293a4aa',
          language:'pt-BR',
          page: 1,
        }
      })

      //console.log(response.data.results.slice(0,10));
      setMovies(response.data.results.slice(0,10));
      setLoading(false);

    };

    loadMovies();

  },[]);

  if(loading){
    return(
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className='page'>
      <div className="movies-list">
        {movies.map((movies)=>{
          return(
            <article key={movies.id}>
              <h1>{movies.title}</h1>
              <div className='container'><img src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`} alt={movies.title} />
               <Link to={`/movie/${movies.id}`}>Acessar</Link>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
};
