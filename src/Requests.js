const API_KEY = '9ddade135fe7cd0adad9ab5a8a99d197';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, // ok
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, //ok
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, //ok
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
// https://api.themoviedb.org/3/movie/top_rated?api_key=9ddade135fe7cd0adad9ab5a8a99d197&language=en-US