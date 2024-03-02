import { FC } from "react"
import styled from "styled-components"
import * as types from "../types/global"
import Subcategory from "./Subcategory"

const StyledSubcategories = styled.div``

interface SubcategoriesProps {
  subcategories: types.Subcategory[]
}

const Subcategories: FC<SubcategoriesProps> = ({
  subcategories,
  ...restProps
}) => {
  return (
    <StyledSubcategories {...restProps}>
      {subcategories.map((subcategory, index) => (
        <Subcategory key={index} subcategory={subcategory} />
      ))}
    </StyledSubcategories>
  )
}

export default Subcategories
