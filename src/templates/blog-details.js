import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from '../styles/blog-details.module.css'

export default function BlogDetails({ data }) {
  const { html } = data.post
  const { title, stack, date, featuredImg} = data.post.frontmatter
  const postDate = new Date(date)
  const formattedDate = `${(postDate.getMonth() + 1)}/${postDate.getDate()}/${postDate.getFullYear()}`
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <small>{formattedDate}</small>
        <div className={styles.featured}>
          <GatsbyImage
            image={getImage(featuredImg.childImageSharp.gatsbyImageData)}
            alt="Banner"
          />
          
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogDetails($slug: String) {
    post: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
        date
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  }
`