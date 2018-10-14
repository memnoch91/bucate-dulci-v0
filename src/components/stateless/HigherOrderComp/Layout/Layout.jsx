import React from 'react'
import './layout.scss'

//COMPONENTS
import Navbar from '../../Navbar/Navbar'


function Layout(props) {
  return (
    <main className="layout">
      <Navbar />
      {props.children}
    </main>
  )
}

export default Layout;
