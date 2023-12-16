"use client"
import React, { Children } from 'react'
import Sidebar from './Sidebardash'

const Layout = ({children}) => {
  return (
    <div className='bg-white'>
      <div className='flex gap-0'>
      <div className=' bg-white h-screen sticky top-0'><Sidebar/></div>
      <div className=' bg-white text-[80%] p-5 font-light h-auto pl-[42px] '>{children}</div>
      </div>
    </div>
  )
}

export default Layout
