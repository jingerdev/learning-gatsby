import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>      
      <div className='about'>
        <h1>About Page</h1>
        <p>This site was build with Gatsby following through The Net Ninja Tutorial series in Youtube. It's clearly explained and easy to follow. It's one of my favorite web dev channels! Highly recommended!</p>
        <p>I've been following some blogs of developers using static sites with markdown and feel very amazed at how fast they load. That's how I got interested in learning Gatsby. Now I'm thinking of migrating my wordpress portfolio site to Gatsby. &#128513; </p>
        <p>Check the tutorial here: <Link href='https://www.youtube.com/watch?v=Qms4k6y7OgI&list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB' target='_blank'>The Net Ninja Gastby Tutorial</Link>
        </p>
      </div> 
    </Layout> 
  )
}
