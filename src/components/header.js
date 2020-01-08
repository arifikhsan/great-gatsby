import React from 'react';
import { Link } from 'gatsby';

export default () => {
  return (
    <div>
      <h1>Title on Header</h1>
      <nav>
        <Link to="/">Index</Link><br/>
        <Link to="/blog">Blog</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/contact">contact</Link><br/>
      </nav>
    </div>
  )
}
