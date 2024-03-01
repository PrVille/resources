import styled from "styled-components"

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const GridItem = styled.div`
  padding: 15px;
  width: 100%;

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 33.3333%;
  }
`
