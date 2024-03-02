import resources from "../../data/resources.json"
import styled from "styled-components"
import Categories from "../../components/Categories"
import Dropdown from "../../components/Dropdown"

const StyledHome = styled.div`
  padding: 10px;
`

const StyledTitle = styled.h1`
  flex-grow: 1;
  text-transform: uppercase;
  text-align: center;
  padding: 24px 0px;
`

const StickyDropdown = styled.div`
  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
`

const Home = () => {
  return (
    <StyledHome>
      <StyledTitle>Free Resources</StyledTitle>

      <StickyDropdown>
        <Dropdown categories={resources.categories} />
      </StickyDropdown>

      <Categories categories={resources.categories} />
    </StyledHome>
  )
}

export default Home
