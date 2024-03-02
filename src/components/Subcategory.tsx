import styled from "styled-components"
import { FC } from "react"
import * as types from "../types/global"
import Resources from "./Resources"

const StyledSubcategory = styled.div``

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: gray;
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0px;
`

const Name = styled.h3`
  padding: 0 24px;
`

interface SubcategoryProps {
  subcategory: types.Subcategory
}

const Subcategory: FC<SubcategoryProps> = ({ subcategory, ...restProps }) => {
  return (
    <StyledSubcategory {...restProps}>
      <NameContainer>
        <Line />
        <Name>{subcategory.name}</Name>
        <Line />
      </NameContainer>

      <Resources resources={subcategory.resources} />
    </StyledSubcategory>
  )
}

export default Subcategory
