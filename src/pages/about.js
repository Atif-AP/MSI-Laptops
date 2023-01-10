import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import {} from './about.module.css'

export const query = graphql`
query {
  wpPage(slug: {eq: "about-us"}) {
    aboutUsFields {
      missionToGamers
      missionToGamersTitle
      ourStory
      ourStoryTitle
      missionToGamersImage {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
}`


const AboutPage = ({data: {wpPage: {aboutUsFields}}}) => {
  const image = getImage(aboutUsFields.missionToGamersImage.localFile)

  return (
    <Layout pageTitle="About Us">
      <div>
        <h1>{aboutUsFields.ourStoryTitle}</h1>
        <p dangerouslySetInnerHTML={{__html: aboutUsFields.ourStory}}/>
      </div>
      <div>
        <div>
          <h1>{aboutUsFields.missionToGamersTitle}</h1>
          <p dangerouslySetInnerHTML={{__html: aboutUsFields.missionToGamers}}/>
        </div>
        <GatsbyImage image={image} alt={aboutUsFields.missionToGamersImage.altText} />
      </div>
    </Layout>
  )
}

export default AboutPage