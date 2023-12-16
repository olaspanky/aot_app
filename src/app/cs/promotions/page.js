"use client"
import React from 'react'
import Layout from '../../shared/Layout2'
import { Search } from '@mui/icons-material'
import FilterListIcon from '@mui/icons-material/FilterList';
import Promotions from '../../components/cs/Promotions';
import { useDispatch } from 'react-redux';
import { PromotionsPages, setCurrentPage } from '@/store/slice/promotionsSlice';

const page = () => {
  const dispatch=useDispatch();
  return (
    <Layout>
    
    <div className='sticky'>
    <div className='w-[80%]'>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-[32px] p-2'>Promotions</h1>
    </div>


    <div>
    <ul className="flex text-sm font-light">
  <li className="mr-6">
    <button className="text-gray-500 text-[16px] hover:underline"  onClick={()=>dispatch(setCurrentPage(PromotionsPages.ALL_PROMOTIONS))}>All Promotions</button>
  </li>
  <li className="mr-6">
    <button className="text-gray-500 text-[16px] hover:underline"  onClick={()=>dispatch(setCurrentPage(PromotionsPages.ACTIVE))}>Active</button>
  </li>
  <li className="mr-6">
    <button className="text-gray-500 text-[16px] hover:underline"  onClick={()=>dispatch(setCurrentPage(PromotionsPages.INACTIVE))}>Inactive</button>
  </li>
  <li className="mr-6">
  </li>
</ul>
    </div>

    {/** searchbar and Most Recent*/}
    <div className='grid grid-cols-12 my-2'>
    <div className='col-span-6'>
    <div className="flex items-center border-gray-300 border rounded-xl w-[80%] p-1">
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
    <div className='bg-white shadow-xl rounded-lg mt-5 p-10  h-[80%] w-full'>
    <Promotions/>
    
    </div>

    </div>
    </Layout>
  )
  }
  export default page
