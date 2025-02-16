"use client"
import React, { Children } from 'react'
import Sidebar from './Sidebarapp'

const Layout3 = ({children}) => {
  return (
    <div className='bg-white'>
      <div className='flex gap-0 h-full'>
      <div className=' bg-white h-screen sticky top-0'><Sidebar/></div>
      <div className=' bg-white text-sm w-full font-light h-auto top-0'>{children}</div>
      </div>
    </div>
  )
}

export default Layout3
