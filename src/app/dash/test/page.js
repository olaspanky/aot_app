"use client"
import React from 'react'
import Layout from '../../shared/Layout'
import Test from '../../components/dash/Test';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'; 
import ProtectedRoute from '@/app/components/Protected';


const page = () => {
  const dispatch=useDispatch();
  const user = useSelector((state) => state.user);

  
  return (
    <ProtectedRoute user={user}>
      <Layout>
      <div className='w-full mt-10'>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-2xl p-2'>Staffs</h1>
    </div>

    {/**table */}
    <div className='bg-white shadow-xl rounded-lg mt-5 p-2  h-full w-full'>
    < Test/>
    
    </div>

    </div>
    </Layout>
    </ProtectedRoute>
  )
}

export default page
