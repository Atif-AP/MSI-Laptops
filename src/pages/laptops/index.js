import * as React from 'react'
import Layout from "../../components/layout";
import { Link, graphql } from 'gatsby'

const LaptopsPage = ({data: {allWpLaptop: {edges}}}) => {
  return(
    <Layout pageTitle="Laptops of MSI Laptops">
        {edges.map((item) => {
          const laptop = item.node.msiLaptopsFields;
          const slug = item.node.slug;
          return <Link to={`/laptops/${slug}`}>
            <p key={item.node.id}>{laptop.title}</p>
          </Link>
        })}
    </Layout>
  )
} 

export const query = graphql`
query {
  allWpLaptop {
    edges {
      node {
        msiLaptopsFields {
          title
        }
        id
        slug
      }
    }
  }
}
`

export default LaptopsPage;