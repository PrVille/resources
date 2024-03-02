import { FC } from "react"
import styled from "styled-components"
import * as types from "../types/global"
import Category from "./Category"
import useFavorites from "../hooks/useFavorites"

const StyledCategories = styled.div``

interface CategoriesProps {
  categories: types.Category[]
}

const Categories: FC<CategoriesProps> = ({ categories, ...restProps }) => {
  const { favorites } = useFavorites()

  return (
    <StyledCategories {...restProps}>
      {favorites.length > 0 && (
        <Category category={{ name: "Favorites", resources: favorites }} />
      )}
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </StyledCategories>
  )
}

export default Categories
