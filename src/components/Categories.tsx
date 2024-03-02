import { FC } from "react"
import styled from "styled-components"
import * as types from "../types/global"
import Category from "./Category"

const StyledCategories = styled.div``

interface CategoriesProps {
  categories: types.Category[]
}

const Categories: FC<CategoriesProps> = ({ categories, ...restProps }) => {
  return (
    <StyledCategories {...restProps}>
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </StyledCategories>
  )
}

export default Categories
