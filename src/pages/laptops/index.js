import * as React from 'react'
import Layout from "../../components/layout";
import Laptop from "../../components/laptop"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {img, text, laptops, container} from "./index.module.css"

const LaptopsPage = ({data: {allWpLaptop: {edges}, wpPage: {msiLaptopsPageFields}}}) => {
  const image = getImage(msiLaptopsPageFields.picture.localFile)

  return(
    <Layout pageTitle="Laptops of MSI Laptops">
      <div className={container}>
        <div className={img}>
          <GatsbyImage image={image} alt={msiLaptopsPageFields.picture.altText}/>
        </div>
        <div className={text}>
          <h1>{msiLaptopsPageFields.title}</h1>
          <p dangerouslySetInnerHTML={{__html: msiLaptopsPageFields.description}}/>
        </div>
      </div>
      <div className={laptops}>
        {edges.map(({node: laptop}) => (
          <Laptop key={laptop.id} slug={laptop.slug} laptop={laptop}></Laptop>
        ))}
      </div>
    </Layout>
  )
} 

export const query = graphql`
query {
  wpPage(slug: {eq: "msi-laptops"}) {
    msiLaptopsPageFields {
      description
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(quality:100, placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
  allWpLaptop {
    edges {
      node {
        msiLaptopsFields {
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(quality:100, placeholder: BLURRED)
              }
            }
            altText
          }
        }
        slug
        id
      }
    }
  }
}
`

export default LaptopsPage;