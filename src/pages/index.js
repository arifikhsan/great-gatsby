import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/default"

export default () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>
        I'm Arif Ikhsanudin, a full-stack developer living in beautiful Magelang
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
