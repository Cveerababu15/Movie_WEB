import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

function FaviroutePage() {
  const { favorites } = useMovieContext()

  if (!favorites.length) {
    return (
      <div className="favorites-empty">
        <h2>No favorite movies yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
      </div>
    )
  }

  return (
    <div className="favorite">
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default FaviroutePage
