import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <header>
      <h1>Arif Ikhsanudin</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
