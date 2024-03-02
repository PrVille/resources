import { FC } from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding-top: 48px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: gray;
`

const Link = styled.a.attrs({ target: "_blank", rel: "noopener noreferrer" })`
  cursor: pointer;
  color: gray;

  &:hover {
    color: black;
  }
`

const Links = styled.div`
  display: flex;
  gap: 12px;
`

const Author = styled.p``

interface FooterProps {}

const Footer: FC<FooterProps> = ({ ...restProps }) => {
  return (
    <StyledFooter {...restProps}>
      <Links>
        <Link href="mailto:ville.prami@me.com?subject=Resources%20User%20Contact">
          Contact
        </Link>
        <Link>Contribute</Link>
      </Links>
      <Author>
        Website by <Link>Ville Prami</Link>
      </Author>
    </StyledFooter>
  )
}

export default Footer
