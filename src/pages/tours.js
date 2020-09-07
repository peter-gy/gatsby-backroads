import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"

const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid}></StyledHero>
    </Layout>
  )
}

export const toursImageQuery = graphql`
  {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tours
