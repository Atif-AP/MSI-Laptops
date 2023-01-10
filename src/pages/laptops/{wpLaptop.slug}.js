import * as React from 'react'
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby'
import {container, img, desc, title} from "./page.module.css"

export const query = graphql`
query ($slug: String) {
  wpLaptop(slug: {eq: $slug}) {
    msiLaptopsFields {
      description
      gpu
      os
      processorType
      psuWattage
      ram
      screenSize
      title
      typeOfStorage
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED)
          }
        }
        altText
      }
    }
    types {
      nodes {
        name
      }
    }
  }
}
`

const LaptopsPage = ({data: {wpLaptop: {msiLaptopsFields: laptop, types: {nodes: types}}}}) => {
  const image = getImage(laptop.picture.localFile)

  return(
    <Layout pageTitle="Laptops Template">
        <div>
          <div className={container}>
            <div className={img}>
              <GatsbyImage image={image} alt={laptop.picture.altText}/>
            </div>
            <div className={desc}>
              <h1 className={title}>{laptop.title}</h1>
              <div>
                {types.map((type, i) => (
                  <span key={i}>
                    {type.name} {i +1 < types.length && "--"}
                  </span>
                ))}
              </div>
              <div dangerouslySetInnerHTML={{__html: laptop.description}}/>
            </div>
          </div>
          <p>Processor: {laptop.processorType}</p>
          <p>OS: {laptop.os}</p>
          <p>Graphics: {laptop.gpu}</p>
          <p>RAM: {laptop.ram} GB</p>
          <p>Screen size: {laptop.screenSize} in.</p>
          <p>Battery size: {laptop.psuWattage} Whr</p>
          <p>Storage Type: {laptop.typeOfStorage}</p>
        </div>
    </Layout>
  )
}

export default LaptopsPage;