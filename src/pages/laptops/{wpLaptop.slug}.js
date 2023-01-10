import * as React from 'react'
import Layout from "../../components/layout";
import { graphql } from 'gatsby'

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
        sourceUrl
      }
    }
  }
}
`

const LaptopsPage = ({data: {wpLaptop: {msiLaptopsFields: laptop}}}) => {

  return(
    <Layout pageTitle="Laptops Template">
        <div>
          <h1>{laptop.title}</h1>
          <div dangerouslySetInnerHTML={{__html: laptop.description}}/>
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