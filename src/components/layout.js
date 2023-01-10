import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { header, nav, navLinks, navLinkItem, navLinkText, title } from './layout.module.css'
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      wpPage(slug: {eq: "contact-us"}) {
        contactUsFields {
          address
          city
          facebook
          instagram
          zipcode
        }
      }
    }
  `)
  return (
    <>
      <div>
        <title>{data.site.siteMetadata.title}</title>
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
      <Footer 
        siteTitle={data.site.siteMetadata.title} 
        companyInfo={data.wpPage.contactUsFields}
      />
    </>
  )
}

export default Layout