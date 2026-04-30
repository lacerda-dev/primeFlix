import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, replace } from 'react-router-dom';
import api from '../../services/api';
import './movie-info.css';
import {toast} from 'react-toastify';

export const Movies = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  

  useEffect(()=>{
    async function loadMovie(){
      await api.get(`/movie/${id}`,{
        params:{
          api_key: '5909aca151764ef396baccdd1293a4aa',
          language:'pt-BR',
        }
      })
      .then((response)=>{
        setMovie(response.data);
        setLoading(false);
      })
      .catch(()=>{
        console.log('Filme não encontrado');
        navigate('/' , { replace: true });
        return;
      })
    }

    loadMovie();


    return () => {
      console.log('Componente desmontado')
    }
  }, [id , navigate])


  function saveMovie(){
    const myList = localStorage.getItem('@primeFlix');

    let moviesOnList = JSON.parse(myList) || [];

    const hasMovie = moviesOnList.some((movieSave) => movieSave.id === movie.id)

    if(hasMovie){
      toast.warn('Este filme já está na sua lista!')
      return;
    }

    moviesOnList.push(movie);
    localStorage.setItem('@primeFlix', JSON.stringify(moviesOnList));
    toast.success('Filme salvo com sucesso!')

  }


  if(loading){
    return (
      <div>
        <h1 className='loading'>Carregando...</h1>
      </div>
    )
  }

  return (
    <div className='movie-info'>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>

      <p>Avaliação: {movie.vote_average.toFixed(1)} / 10</p>
      <p className='run-time'>Duração: {movie.runtime} min</p>

      <div className='buttons-area'>
        <button onClick={saveMovie}>Salvar</button>
        <button><a href={`https://youtube.com/results?search_query=${movie.title} Traile`} target='blank' rel='external'>
          Trailer</a></button>
      </div>
    </div>
  )
}
