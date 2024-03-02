import { FC, ReactNode, useState } from "react"
import { Resource } from "../types/global"
import FavoritesContext from "../contexts/FavoritesContext"

interface FavoritesProviderProps {
  children: ReactNode
}

const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")

const FavoritesProvider: FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<Resource[]>(storedFavorites)

  const isFavorite = (resource: Resource) =>
    favorites.some((favorite) => favorite.title === resource.title)

  const toggleFavorite = (resource: Resource) => {
    const newFavorites = isFavorite(resource)
      ? favorites.filter((favorite) => favorite.title !== resource.title)
      : [...favorites, resource]

    localStorage.setItem("favorites", JSON.stringify(newFavorites))

    setFavorites(newFavorites)
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider
