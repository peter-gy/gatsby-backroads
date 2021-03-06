import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import FeaturedTours from "../components/Home/FeaturedTours"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.file.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sequi!"
      >
        <AniLink cover to="/tours" className="btn-white">
          Explore Tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const heroImageQuery = graphql`
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
