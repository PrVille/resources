import styled from "styled-components"
import { FC } from "react"
import * as types from "../types/global"

const StyledResource = styled.a`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  color: inherit;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`

const Title = styled.h4`
  padding-bottom: 16px;
`

const Description = styled.p`
  font-size: 14px;
  color: gray;
`

interface ResourceProps {
  resource: types.Resource
}

const Resource: FC<ResourceProps> = ({ resource, ...restProps }) => {
  return (
    <StyledResource
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      {...restProps}
    >
      <Title>{resource.title}</Title>
      <Description>{resource.description}</Description>
    </StyledResource>
  )
}

export default Resource
