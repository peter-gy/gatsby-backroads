import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner.js"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops, it's a dead end">
          <AniLink fade to="/" className="btn-white">
            Back to Home Page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
