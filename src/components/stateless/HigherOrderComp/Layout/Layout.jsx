import React from 'react'
import './layout.scss'

//COMPONENTS
import Navbar from '../../../stateful/Navbar/Navbar'
import Footer from '../../../stateful/Footer/Footer'


function Layout(props) {
  return (
    <main className="layout">
      <Navbar />
      {props.children}
      <Footer />
    </main>
  )
}

export default Layout;
