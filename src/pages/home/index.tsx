import resources from "../../data/resources.json"
import styled from "styled-components"

import { Grid, GridItem } from "../../components/Grid"
import {
  Card,
  CardContent,
  Description,
  Url,
  Title,
} from "../../components/Card"

const StyledHome = styled.div`
  padding: 10px;
`

const StyledTitle = styled.h1``

const Home = () => {
  return (
    <StyledHome>
      <StyledTitle>Free Resources</StyledTitle>
      {resources.categories.map((category, catIndex) => (
        <>
          <h2>{category.name}</h2>
          {category.subcategories.map((subcategory, subIndex) => (
            <>
              <h3>{subcategory.name}</h3>
              <Grid>
                {subcategory.resources.map((resource, resIndex) => (
                  <GridItem key={`${catIndex}-${subIndex}-${resIndex}`}>
                    <Card>
                      <CardContent>
                        <Title>{resource.title}</Title>
                        <Description>{resource.description}</Description>
                        <Url
                          href={resource.url}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {resource.url}
                        </Url>
                      </CardContent>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
            </>
          ))}
        </>
      ))}
    </StyledHome>
  )
}

export default Home
