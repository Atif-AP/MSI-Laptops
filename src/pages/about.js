import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import { mtg, img, story, titleStory, titleMtg } from './about.module.css'

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
      <div className={story}>
        <h1 className={titleStory}>{aboutUsFields.ourStoryTitle}</h1>
        <p dangerouslySetInnerHTML={{__html: aboutUsFields.ourStory}}/>
      </div>
      <div className={mtg}>
        <div>
          <h1 className={titleMtg}>{aboutUsFields.missionToGamersTitle}</h1>
          <p dangerouslySetInnerHTML={{__html: aboutUsFields.missionToGamers}}/>
        </div>
        <GatsbyImage className={img} image={image} alt={aboutUsFields.missionToGamersImage.altText} />
      </div>
    </Layout>
  )
}

export default AboutPage