import React from "react"
import TourList from "./TourList"
import { graphql, useStaticQuery } from "gatsby"

const toursQuery = graphql`
  {
    tours: allContentfulTour {
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

const Tours = () => {
  const { tours } = useStaticQuery(toursQuery)

  return (
    <div>
      <TourList tours={tours} />
    </div>
  )
}

export default Tours
