import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarE } from './index.js'
import FooterE from './FooterE.jsx'
function Layout() {
  return (
    <>
    <div className="text-text-100 bg-background-950 font-OpenSans ">
          <NavBarE />
          
      <Outlet />
      <FooterE />
      </div>
    </>
  )
}

export default Layout
