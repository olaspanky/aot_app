// "use client"
// import React from 'react'
// import Layout from '../../shared/Layout3'
// import Faq from '../../components/webapp/Support';
// import { useDispatch } from 'react-redux';

// const page = () => {
//   const dispatch=useDispatch();
//   return (
//     <Layout>
    
//     <div className='sticky w-full text-black'>
//     <div className=''>
//     <div className=' bg-white my-5 text-black'>
//     <h1 className='text-black font-semibold text-[32px] p-2'>Support</h1>
//     </div>
//     </div>

//     {/**table */}
//     <div className='bg-white shadow-xl rounded-lg mt-5 p-10  h-full w-[100%]'>
//         <h1 className='font-bold text-[24px]'>How can we help</h1>
//         <div className='w-full mt-5'>
//         <Faq/>
//         </div>
    
//     </div>

//     </div>
//     </Layout>
//   )
// }

// export default page

"use client"
import React from 'react'
import Layout from '../../shared/Layout3'
import { Search } from '@mui/icons-material'
import Faq from '../../components/webapp/Faq';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'; 
import ProtectedRoute from '@/app/components/Protectapp';


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
    <h1 className='font-bold text-[24px]'>How can we help</h1>
         <div className='w-full mt-5'>
         <Faq/>
        </div>
    
    </div>

    </div>
    </Layout>
    </ProtectedRoute>
  )
}

export default page

