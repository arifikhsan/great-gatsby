import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

export default () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://www.github.com/arifikhsan/" target="_blank">
          Arif Ikhsanudin
        </a>{" "}
        on github!
      </p>
      <Footer />
    </div>
  )
}
