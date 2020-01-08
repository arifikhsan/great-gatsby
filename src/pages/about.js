import React from 'react';
import { Link } from 'gatsby';

import Footer from "../components/footer"

export default () => {
  return (
    <div>
      <h1>About</h1>
      <p>I like to play games!</p>
      <Link to='/contact'>Want to work with me? Reach out.</Link>
      <Footer />
    </div>
  )
}
