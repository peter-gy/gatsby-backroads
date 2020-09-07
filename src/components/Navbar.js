import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.svg"

const Navbar = () => {
  const [isOpen, setNavbar] = useState(false)
  const toggleNav = () => setNavbar(isOpen => !isOpen)

  const navLinks = links.map((item, index) => (
    <li key={index}>
      <AniLink cover to={item.path}>
        {item.text}
      </AniLink>
    </li>
  ))
  const socialLinks = socialIcons.map((item, index) => (
    <a key={index} href={item.url} target="_blank" rel="noreferrer">
      {item.icon}
    </a>
  ))

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="Backroads Logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {navLinks}
        </ul>
        <div className={styles.navSocialLinks}>{socialLinks}</div>
      </div>
    </nav>
  )
}

export default Navbar
