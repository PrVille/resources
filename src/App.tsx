import styled from "styled-components"
import { GlobalStyles } from "./styles/global"
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/home"
import FavoritesProvider from "./providers/FavoritesProvider"

const StyledApp = styled.main``

const App = () => {
  return (
    <>
      <Analytics />
      <GlobalStyles />
      <FavoritesProvider>
        <StyledApp>
          <Home />
        </StyledApp>
      </FavoritesProvider>
    </>
  )
}

export default App
