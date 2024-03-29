import resources from "../data/resources"
import { FC } from "react"
import { Category } from "../types/global"
import styled from "styled-components"
import useFavorites from "../hooks/useFavorites"

const StyledSidebar = styled.aside`
  position: sticky;
  top: 60px;
  left: 0px;

  margin-right: 50px;
  max-width: 270px;
  min-width: 270px;
  height: calc(100vh - 60px);

  overflow-y: auto;

  display: flex;
  flex-direction: column;
`

const Content = styled.ul`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`

const Title = styled.li`
  margin-top: 30px;
  margin-bottom: 5px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
`

const ListItem = styled.li`
  padding-top: 6px;
  padding-bottom: 6px;
  cursor: pointer;
  font-size: 14px;
  color: gray;

  &:hover {
    color: black;
  }
`

const ListItemLg = styled(ListItem)`
  font-size: 16px;
`

const TotalResources = styled.li`
  text-transform: uppercase;
  font-weight: 700;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 12px;
`

interface SidebarProps {
  categories: Category[]
}

const Sidebar: FC<SidebarProps> = ({ categories, ...restProps }) => {
  const { favorites } = useFavorites()

  const handleScroll = (categoryName: string) => {
    const section = document.getElementById(categoryName)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <StyledSidebar {...restProps}>
      <Content>
        {favorites.length > 0 && (
          <ListItemLg onClick={() => handleScroll("Favorites")}>
            Favorites
          </ListItemLg>
        )}
        <Title>Categories</Title>

        {categories.map((category, index) => (
          <ListItem key={index} onClick={() => handleScroll(category.name)}>
            {category.name}
          </ListItem>
        ))}

        <TotalResources>Total Resources: {resources.length}</TotalResources>
      </Content>
    </StyledSidebar>
  )
}

export default Sidebar
