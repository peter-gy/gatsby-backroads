import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"

const tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid} />
      <Tours />
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
