import styled from "styled-components"
import { GlobalStyles } from "./styles/global"
import Home from "./pages/home"

const StyledApp = styled.main``

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Home />
      </StyledApp>
    </>
  )
}

export default App
