import * as React from 'react'
import Layout from '../components/layout'
import Laptop from '../components/laptop'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { featured, bio, img } from "./index.module.css"

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
          <GatsbyImage className={img} image={image} alt={homePageFields.picture.altText}/>
        </section>
        <section>
          <h4 className={bio} dangerouslySetInnerHTML={{__html: homePageFields.description}}/>
        </section>
        <section className={featured}>
          {homePageFields.featuredProducts.map(laptop => {
            return <Laptop slug={`laptops/${laptop.slug}`} key={laptop.id} laptop={laptop} />
          })}
        </section>
      </Layout>
    </main>
  )
}

export default IndexPage