import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import services from "../../constants/services"

const Services = () => {
  const serviceItems = services.map((item, index) => {
    return (
      <article key={index} className={styles.service}>
        <span>{item.icon}</span>
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </article>
    )
  })

  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      <div className={styles.center}>{serviceItems}</div>
    </section>
  )
}

export default Services
