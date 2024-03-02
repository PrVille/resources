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
    const subcategoryName = event.target.value
    const section = document.getElementById(subcategoryName)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <StyledDropdown onChange={handleSelectChange} {...restProps}>
      {categories.map((category, index) => (
        <optgroup label={category.name} key={index}>
          {category.subcategories.map((subcategory, subIndex) => (
            <option value={subcategory.name} key={subIndex}>
              {subcategory.name}
            </option>
          ))}
        </optgroup>
      ))}
    </StyledDropdown>
  )
}

export default Dropdown
