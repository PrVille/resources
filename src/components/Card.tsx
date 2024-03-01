import styled from "styled-components"

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

export const CardContent = styled.div`
  padding: 16px;
`

export const Title = styled.h5`
  font-size: 18px;
  color: darkslategray;
`

export const Description = styled.p`
  color: grey;
`

export const Url = styled.a`
  color: blue;
`
