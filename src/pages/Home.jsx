import React from 'react'
import MovieCard from '../components/MovieCard.jsx'
import { useState,useEffect } from 'react'
import '../css/Home.css'
import{getPopularMovies,SearchMovies} from '../Services/api.js'

function HomePage() {

const[searchQuery,setSearchQuery]=useState("");
const[movies,setMovies]=useState([]);
const[error,setErrors]=useState(null)
const[loading,setLoading]=useState(true)

// fetching data from the api 
useEffect(()=>{
const loadPopularMovies=async ()=>{
try{
  const response=await getPopularMovies()
  setMovies(response)
} catch(err){
  console.log(err)
  setErrors("Failde To Moviees........")
} finally{
  setLoading(false)
}
}
loadPopularMovies()

},[])

// from submisssion
const handlemovie = async (e) => {
  e.preventDefault();
  if (!searchQuery.trim()) return;
setLoading(true);

  try {
      const results = await SearchMovies(searchQuery);
      setMovies(results);
      setErrors(null);
  } catch (e) {
      console.error(e);
      setErrors("Failed to search movies...");
  } finally {
      setLoading(false);
  }
  searchQuery("")
};


  return (
<div className="home">
    <div className="search-form">
        <form action="" onSubmit={handlemovie}>
        <input type="text" name="" id="" placeholder='Search for a Movie....' className='search-input' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} />
       <button className='search-button' type='submit'>Search</button>
        </form>
    </div>
{error && <div className='error-meesage' >{error}</div>}


 {loading ? <div className='loading'>Loading...</div> : <div className='movies-grid'>
{ movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
}
</div>}

</div>
  )
}
export default HomePage
