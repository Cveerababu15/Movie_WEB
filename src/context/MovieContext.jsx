import React, { createContext, useState, useContext, useEffect } from 'react'

const MoviecContext = createContext()
export const useMovieContext = () => useContext(MoviecContext)

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {

    // Load from localStorage immediately when app starts
    const stored = localStorage.getItem('favorites')
    return stored ? JSON.parse(stored) : []
  })

  // it is maily used for the 
  // Save to localStorage whenever favorites change

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  // Add without duplicates
  const addToFavorites = (movie) => {
    setFavorites((prev) => {
      if (!prev.some((item) => item.id === movie.id)) {
        return [...prev, movie]
      }
      return prev
    })
  }
  // this is maily used for the 
  //  Remove movie from favorites
  const removeFromFavorites = (movie) => {
    setFavorites((prev) => prev.filter((item) => item.id !== movie.id))
  }

  // Check if movie is in favorites
  const isFavorite = (movieId) => {
    return favorites.some((item) => item.id === movieId)
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }

  return (
    <MoviecContext.Provider value={value}>
      {children}
    </MoviecContext.Provider>
  )
}
