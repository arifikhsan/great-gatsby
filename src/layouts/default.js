import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

export default props => {
  console.log(props)
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
