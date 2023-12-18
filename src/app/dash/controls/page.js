"use client"
import React from 'react'
import Layout from '../../shared/Layout'
import Control from '../../components/dash/Control';
import { useDispatch } from 'react-redux';

const page = () => {
  const dispatch=useDispatch();
  return (
    <Layout>
    
    <div className='w-full mt-10'>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-2xl p-2'>Users Control</h1>
    </div>

    {/**table */}
    <div className='bg-white shadow-xl rounded-lg mt-5 p-2  h-full w-full'>
    <Control/>
    
    </div>

    </div>
    </Layout>
  )
}

export default page
