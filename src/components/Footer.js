import React from "react"
import styles from "../css/footer.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  const footerLinks = links.map((item, index) => (
    <AniLink paintDrip key={index} to={item.path} hex="#3fd0d4">
      {item.text}
    </AniLink>
  ))
  const socialLinks = socialIcons.map((item, index) => (
    <a key={index} href={item.url} target="_blank" rel="noreferrer">
      {item.icon}
    </a>
  ))

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>{footerLinks}</div>
      <div className={styles.icons}>{socialLinks}</div>
      <div className={styles.copyright}>
        Copyright &copy; Backroads Travel Company {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
