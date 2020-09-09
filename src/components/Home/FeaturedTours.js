import React from "react"
import Tour from "../Tours/Tour"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Title from "../Title.js"
import styles from "../../css/items.module.css"

const featuredToursQuery = graphql`
  {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const {
    featuredTours: { edges },
  } = useStaticQuery(featuredToursQuery)

  const featuredTourItems = edges.map(({ node }) => {
    return <Tour key={node.contentful_id} tour={node} />
  })

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>{featuredTourItems}</div>
      <AniLink paintDrip to="/tours" className="btn-primary">
        All Tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
