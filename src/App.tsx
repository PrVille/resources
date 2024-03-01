import styled from "styled-components"
import { GlobalStyles } from "./styles/global"
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/home"

const StyledApp = styled.main``

const App = () => {
  return (
    <>
      <Analytics />
      <GlobalStyles />
      <StyledApp>
        <Home />
      </StyledApp>
    </>
  )
}

export default App
