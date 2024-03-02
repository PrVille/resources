import { useContext } from "react"
import FavoritesContext, {
  FavoritesContextType,
} from "../contexts/FavoritesContext"

const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}

export default useFavorites
