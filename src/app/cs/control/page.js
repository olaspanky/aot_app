"use client"
import React from 'react'
import Layout from '../../shared/Layout2'
import Control from '../../components/cs/Control';
import { useDispatch } from 'react-redux';

const page = () => {
  const dispatch=useDispatch();
  return (
    <Layout>
    
    <div className='sticky w-full'>
    <div className=''>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-[32px] p-2'>Support</h1>
    </div>
    </div>

    {/**table */}
    <div className='bg-white shadow-xl rounded-lg mt-5 p-10  h-full w-full'>
    <Control/>
    
    </div>

    </div>
    </Layout>
  )
}

export default page
