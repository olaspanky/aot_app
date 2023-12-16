"use client"
import React from 'react'
import Layout2 from '../../shared/Layout2'
import { Search } from '@mui/icons-material'
import FilterListIcon from '@mui/icons-material/FilterList';
import Usertable from '../../components/cs/User';
import { useDispatch } from 'react-redux';
import { DashboardPages, setCurrentPage } from '@/store/slice/dashboardSlice';

const page = () => {
  const dispatch=useDispatch();
  return (
    <Layout2>
    
    <div className='sticky'>
    <div className='w-[90%] p-5'>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-[32px] p-2'>User Details</h1>
    </div>


    <div>
    <ul className="flex text-sm font-light">
  <li className="mr-6">
    <button className="text-gray-500 text-[16px] hover:underline"  onClick={()=>dispatch(setCurrentPage(DashboardPages.ALL_USERS))}>All Users</button>
  </li>
  <li className="mr-6">
    <button className="text-gray-500 text-[16px] hover:underline"  onClick={()=>dispatch(setCurrentPage(DashboardPages.LOGISTICS_USERS))}>User</button>
  </li>
  <li className="mr-6">
    <button className="text-gray-500 text-[16px] hover:underline"  onClick={()=>dispatch(setCurrentPage(DashboardPages.COMPANY))}>Company</button>
  </li>
  <li className="mr-6">
    <button className="text-gray-400 text-[16px] hover:underline" onClick={()=>dispatch(setCurrentPage(DashboardPages.INDIVIDUAL))}>Individual</button>
  </li>
</ul>
    </div>

    {/** searchbar and Most Recent*/}
    <div className='grid grid-cols-12 my-2'>
    <div className='col-span-6'>
    <div className="flex items-center border-gray-300 border rounded-xl w-[100%] p-1">
    <Search className="text-gray-500" />

      <input
        className="outline-none bg-transparent flex-grow"
        type="text"
        placeholder="Search..."
      />
    </div>
    </div>
    {/**most Recent */}
    <div className='col-span-6 flex gap-2 text-right text-xs font-light items-center'>
    <h2 className='text-black w-full text-[14px] text-right'>Most Recent</h2>
    <span><FilterListIcon className='text-gray-500'/></span>
    </div>
    </div>
    </div>

    {/**table */}
<div className='bg-white shadow-xl rounded-lg mt-5 p-10  h-full w-[100%] inline-block'>
    <Usertable/>
    </div>

    </div>
    </Layout2>
  )
}

export default page
