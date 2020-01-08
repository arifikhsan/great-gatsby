import React from "react"
import { Link } from "gatsby"

import Footer from "../components/footer"

export default () => (
  <div>
    <h1>Hello</h1>
    <h2>
      I'm Arif Ikhsanudin, a full-stack developer living in beautiful Magelang
    </h2>
    <p>
      Need a developer? <a href="/contact">Contact me</a>
    </p>
    <p>
      Need a developer? <Link to="/contact">Contact me</Link>
    </p>
    <Footer />
  </div>
)
