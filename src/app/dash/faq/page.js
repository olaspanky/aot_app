"use client"
import React from 'react'
import Layout from '../../shared/Layout'
import { Search } from '@mui/icons-material'
import Faq from '../../components/dash/Faq';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'; 
import ProtectedRoute from '@/app/components/Protected';


const page = () => {
  const dispatch=useDispatch();
  const user = useSelector((state) => state.user);

  
  return (
    <ProtectedRoute user={user}>
    <Layout>
    
    <div className='sticky text-black'>
    <div className=''>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-[32px] p-2'>Support</h1>
    </div>
    </div>

    {/**table */}
    <div className='bg-white shadow-xl rounded-lg mt-5 p-10  h-full w-[75vw]'>
    <Faq/>
    
    </div>

    </div>
    </Layout>
    </ProtectedRoute>
  )
}

export default page
