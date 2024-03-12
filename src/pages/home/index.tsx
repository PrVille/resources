import resources from "../../data/resources"
import styled from "styled-components"
import Categories from "../../components/Categories"
import Sidebar from "../../components/Sidebar"
import Footer from "../../components/Footer"
import { Category, CategoryName, Resource } from "../../types/global"

const StyledHome = styled.div`
  min-height: 100vh;
  display: flex;
`

const StyledTitle = styled.h1`
  flex-grow: 1;
  text-transform: uppercase;
`

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-top: 60px;
`

const TopBar = styled.header`
  position: fixed;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;

  z-index: 10;
`

const convertResourcesToCategories = (resources: Resource[]): Category[] => {
  const categoryMap: Map<CategoryName, Resource[]> = new Map()

  for (const resource of resources) {
    for (const category of resource.categories) {
      if (!categoryMap.has(category)) {
        categoryMap.set(category, [])
      }

      categoryMap.get(category)?.push(resource)
    }
  }

  const convertedData: Category[] = []

  categoryMap.forEach((resources, name) => {
    const category: Category = {
      name,
      resources,
    }

    convertedData.push(category)
  })

  return convertedData
}

const categories = convertResourcesToCategories(resources).sort((a, b) =>
  a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
)

const Home = () => {
  return (
    <StyledHome>
      <TopBar>
        <StyledTitle>Free Resources</StyledTitle>
      </TopBar>

      <Sidebar categories={categories} />

      <MainContent>
        <Categories categories={categories} />
        <Footer />
      </MainContent>
    </StyledHome>
  )
}

export default Home
