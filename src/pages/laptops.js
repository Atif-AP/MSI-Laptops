import * as React from 'react'
import Layout from "../components/layout";
import { useStaticQuery, graphql } from 'gatsby'

const LaptopsPage = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return(
    <Layout pageTitle={data.site.siteMetadata.title}>
        <p>List of all our laptops</p>
    </Layout>
  )
} 

export default LaptopsPage;