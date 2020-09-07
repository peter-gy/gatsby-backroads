import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid}></StyledHero>
      hello from blog page<Link to="/">back home</Link>
    </Layout>
  )
}

export const blogImageQuery = graphql`
  {
    file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
