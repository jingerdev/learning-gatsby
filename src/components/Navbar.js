import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`  
    query SiteData {
      site {
        host
        port
        siteMetadata {
          title
        }
      }
    }
  `)
  
  const { title } = data.site.siteMetadata
  
  return (
    <nav>
      <h1>
        <Link to='/'>{title}</Link>
      </h1>
      <div className='menu'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
      </div>
    </nav>
  )
}
