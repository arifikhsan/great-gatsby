import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetaData {
          author
        }
      }
    }
  `)
  
  return (
    <footer>
      <p>Created by {data.site.siteMetaData.author}, &copy; 2020</p>
    </footer>
  )
}
