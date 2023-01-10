import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { header, nav, navLinks, navLinkItem, navLinkText, title } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={header}>
        <h1 className={title}>{data.site.siteMetadata.title}</h1>
        <nav className={nav}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/">
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/about">
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/laptops">
                Laptops
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link className={navLinkText} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout