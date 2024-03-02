import resources from "../../data/resources.json"
import styled from "styled-components"
import Categories from "../../components/Categories"
import Sidebar from "../../components/Sidebar"

const sortedCategories = resources.categories.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))

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

const Home = () => {  
  return (
    <StyledHome>
      <TopBar>
        <StyledTitle>Free Resources</StyledTitle>
      </TopBar>

      <Sidebar categories={sortedCategories} />

      <MainContent>
        <Categories categories={sortedCategories} />
      </MainContent>
    </StyledHome>
  )
}

export default Home
