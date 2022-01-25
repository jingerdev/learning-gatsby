import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
  return (
    <div className='layout'>
      <Navbar />
      <main>
        {children}
      </main>
      <footer>
          <p>Copyright 2022 &copy; Learning Gatsby</p>
      </footer>
    </div>
  )
}
