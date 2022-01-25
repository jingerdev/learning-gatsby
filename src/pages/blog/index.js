import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from '../../styles/blogs.module.css'

export default function Blog({ data }) {
  const posts = data.posts.nodes
  return (
    <Layout>    
      <div className={styles.portfolio}>
        <h2>Blog</h2>
        <h3>Stuff I've written &#128540;</h3>
        <div className={styles.projects}>
          {posts.map(post => {
            const date = new Date(post.frontmatter.date)
            const formattedDate = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`
            return (                
              <Link to={'/blog/' + post.frontmatter.slug} key={post.id}>
                <div>
                  <GatsbyImage
                    image={getImage(post.frontmatter.thumb.childImageSharp.gatsbyImageData)}
                    alt="Banner"
                  />
                  <h3>{post.frontmatter.title}</h3>
                  <p>{post.frontmatter.stack}</p>
                  <small>{formattedDate}</small>
                </div>
              </Link>
            )}
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query  = graphql`
  query BlogPosts {
    posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
  }

`