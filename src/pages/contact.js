import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact"

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.file.childImageSharp.fluid}></StyledHero>
      <Contact />
    </Layout>
  )
}

export const contactImageQuery = graphql`
  {
    file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
