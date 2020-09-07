import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner.js"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Oops, it's a dead end">
          <Link to="/" className="btn-white">
            Back to Home Page
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
