import styled from "styled-components"
import { FC } from "react"
import * as types from "../types/global"
import Resources from "./Resources"

const StyledCategory = styled.div``

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: gray;
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 0px 48px 0px;
`

const Name = styled.h2`
  text-transform: uppercase;
  padding: 0 24px;
`

interface CategoryProps {
  category: types.Category
}

const Category: FC<CategoryProps> = ({ category, ...restProps }) => {
  return (
    <StyledCategory id={category.name} {...restProps}>
      <NameContainer>
        <Line />
        <Name>{category.name}</Name>
        <Line />
      </NameContainer>

      <Resources resources={category.resources} />
    </StyledCategory>
  )
}

export default Category
