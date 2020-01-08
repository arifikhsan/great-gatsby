import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/default"

export default () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>I like to play games!</p>
      <Link to="/contact">Want to work with me? Reach out.</Link>
    </Layout>
  )
}
