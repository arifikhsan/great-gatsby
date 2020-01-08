import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/index.css'

export default props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
