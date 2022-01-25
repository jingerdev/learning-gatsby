import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>            
          <h2>Learning Gatsby</h2>
          <h3>Web dev stuff</h3>
          <p>I'm a web developer based in the Philippines. My ultimate dream is to see sunrise and sunset from space. Yep, totally unrelated. I just needed some stuff to put here.</p>
          <Link className={styles.btn} to='/blog'>Read Blog</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="banner"/>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`