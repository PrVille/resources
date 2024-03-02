import { FC } from "react"
import styled from "styled-components"
import * as types from "../types/global"
import Resource from "./Resource"

const StyledResources = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`

interface ResourcesProps {
  resources: types.Resource[]
}

const Resources: FC<ResourcesProps> = ({ resources, ...restProps }) => {
  const sortedResources = resources.sort((a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
  )

  return (
    <StyledResources {...restProps}>
      {sortedResources.map((resource, index) => (
        <Resource key={index} resource={resource} />
      ))}
    </StyledResources>
  )
}

export default Resources
