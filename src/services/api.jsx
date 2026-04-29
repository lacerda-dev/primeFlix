import axios from 'axios';

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=5909aca151764ef396baccdd1293a4aa

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;