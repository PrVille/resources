import styled from "styled-components"
import { FC } from "react"
import * as types from "../types/global"
import useFavorites from "../hooks/useFavorites"
import heartFilled from "../assets/heart-filled.svg"
import heartOutline from "../assets/heart-outline.svg"

const truncate = (text: string, limit = 200) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "..."
  }

  return text
}

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

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 16px;
`

const FavIcon = styled.img`
  height: 16px;
  width: 16px;
`

const Title = styled.h4`
  flex-grow: 1;
  line-height: 16px;
`

const Description = styled.p`
  font-size: 14px;
  color: gray;
`

const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`

const Heart = styled.img`
  height: 16px;
  width: 16px;
`

interface ResourceProps {
  resource: types.Resource
}

const Resource: FC<ResourceProps> = ({ resource, ...restProps }) => {
  const { toggleFavorite, isFavorite } = useFavorites()
  const favIconSrc = `https://www.google.com/s2/favicons?domain=${resource.url}`

  const handleFavoritesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    toggleFavorite(resource)
  }

  return (
    <StyledResource
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      {...restProps}
    >
      <TitleContainer>
        <FavIcon src={favIconSrc} />
        <Title>{resource.title}</Title>
        <Button onClick={handleFavoritesClick}>
          <Heart src={isFavorite(resource) ? heartFilled : heartOutline} />
        </Button>
      </TitleContainer>

      <Description>{truncate(resource.description)}</Description>
    </StyledResource>
  )
}

export default Resource
