import React, { Component } from "react"
import styles from "../../css/items.module.css"
import Tour from "./Tour"
import Title from "../Title"

export class TourList extends Component {
  state = {
    tours: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }

  render() {
    const tourItems = this.state.sortedTours.map(({ node }) => (
      <Tour key={node.contentful_id} tour={node} />
    ))
    return (
      <section className={styles.tours}>
        <Title title="our" subtitle="tours" />
        <div className={styles.center}>{tourItems}</div>
      </section>
    )
  }
}

export default TourList
