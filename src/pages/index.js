import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePageFields {
      description
      title
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      featuredProducts {
        ... on WpLaptop {
          id
          msiLaptopsFields {
            description
            picture {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            title
          }
          slug
        }
      }
    }
  }
}
`

const IndexPage = ({data: {wpPage: {homePageFields}}}) => {
  const image = getImage(homePageFields.picture.localFile)

  return (
    <main>
      <Layout>
        <section>
          <h1>{homePageFields.title}</h1>
          <GatsbyImage image={image} alt={homePageFields.picture.altText}/>
        </section>
        <section>

        </section>
      </Layout>
    </main>
  )
}

export default IndexPage