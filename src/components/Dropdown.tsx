import { ChangeEvent, FC } from "react"
import { Category } from "../types/global"
import styled from "styled-components"

const StyledDropdown = styled.select`
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`

interface DropdownProps {
  categories: Category[]
}

const Dropdown: FC<DropdownProps> = ({ categories, ...restProps }) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const categoryName = event.target.value
    const section = document.getElementById(categoryName)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <StyledDropdown onChange={handleSelectChange} {...restProps}>
      {categories.map((category, index) => (
        <option value={category.name} key={index}>
          {category.name}
        </option>
      ))}
    </StyledDropdown>
  )
}

export default Dropdown
