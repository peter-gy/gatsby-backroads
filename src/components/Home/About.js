import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Title from "../Title"
import styles from "../../css/about.module.css"

const aboutImageQuery = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(aboutImageQuery)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="nice landscape"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vero
            beatae voluptatem minima explicabo reiciendis inventore ratione
            labore aliquam iure.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vero
            beatae voluptatem minima explicabo reiciendis inventore ratione
            labore aliquam iure.
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
