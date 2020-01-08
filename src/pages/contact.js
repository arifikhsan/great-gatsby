import React from "react"

import Layout from "../layouts/default"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <Link
          href="https://www.github.com/arifikhsan/"
          target="_blank"
        >
          Arif Ikhsanudin
        </Link>{" "}
        on github!
      </p>
    </Layout>
  )
}
