import { createContext } from "react"
import { Resource } from "../types/global"

export interface FavoritesContextType {
  favorites: Resource[]
  toggleFavorite: (resource: Resource) => void
  isFavorite: (resource: Resource) => boolean
}

const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
)

export default FavoritesContext
