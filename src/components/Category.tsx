import styled from "styled-components"
import { FC } from "react"
import { Category } from "../types/global"
import Subcategories from "./Subcategories"

const StyledCategory = styled.div``

const Name = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-top: 48px;
  padding: 24px 0px;
`

interface CategoryProps {
  category: Category
}

const Category: FC<CategoryProps> = ({ category, ...restProps }) => {
  return (
    <StyledCategory {...restProps}>
      <Name>{category.name}</Name>

      <Subcategories subcategories={category.subcategories} />
    </StyledCategory>
  )
}

export default Category
