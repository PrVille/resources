import resources from "../../data/resources.json"
import styled from "styled-components"
import Categories from "../../components/Categories"

const StyledHome = styled.div`
  padding: 10px;
`

const StyledTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  padding: 24px 0px;
`

const Home = () => {
  return (
    <StyledHome>
      <StyledTitle>Free Resources</StyledTitle>
      <Categories categories={resources.categories} />
      {/* {resources.categories.map((category, catIndex) => (
        <>
          <h2>{category.name}</h2>
          {category.subcategories.map((subcategory, subIndex) => (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "black" }}
                />
                <span style={{ padding: "0 10px" }}>{subcategory.name}</span>
                <div
                  style={{ flex: 1, height: "1px", backgroundColor: "black" }}
                />
              </div>
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
      ))} */}
    </StyledHome>
  )
}

export default Home
