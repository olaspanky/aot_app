"use client"
import React, { useState } from 'react';
import Layout from '../../shared/Layout'
import { Search } from '@mui/icons-material'
import FilterListIcon from '@mui/icons-material/FilterList';
import Promotions from '../../components/dash/Promotions';
import { useDispatch } from 'react-redux';
import { PromotionsPages, setCurrentPage } from '@/store/slice/promotionsSlice';
import { useSelector } from 'react-redux'; 
import ProtectedRoute from "../../components/Protected"
import { setSearchQuery, setFilteredUsers } from '@/store/slice/searchSlice'; // Import your Redux actions




const page = () => {
  const dispatch=useDispatch();
  const user = useSelector((state) => state.user);
  const [searchQuery, setSearchQueryLocal] = useState(''); // Local state to handle input
  const currentPage = useSelector((state) => state.promotionsState.currentPage); // Use the useSelector hook to get the currentPage from the Redux store


  const handleSearch = (query) => {
    // Update local state
    setSearchQueryLocal(query);
  
    // Dispatch Redux action to update search query
    dispatch(setSearchQuery(query));
  
    // Perform filtering logic to calculate filtered users
    const filteredUsers = filteredUsersState.filter((user) =>
      user.name?.toLowerCase().includes(query.toLowerCase())
    );
  
    // Dispatch Redux action to update filtered users list
    dispatch(setFilteredUsers(filteredUsers));
  };


  
  return (
    <ProtectedRoute user={user}>
    <Layout>
    
    <div className='w-full mt-10'>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-2xl py-2'>Promotions</h1>
    </div>


    <div>
    {/* <ul className="flex text-sm font-light">
  <li className="mr-6">
    <button className="text-gray-500 text-[16px] hover:underline"  onClick={()=>dispatch(setCurrentPage(PromotionsPages.ALL_PROMOTIONS))}>All Promotions</button>
  </li>
  <li class="mr-6">
    <button className="text-gray-500 text-[16px] hover:underline"  onClick={()=>dispatch(setCurrentPage(PromotionsPages.ACTIVE))}>Active</button>
  </li>
  <li class="mr-6">
    <button className="text-gray-500 text-[16px] hover:underline"  onClick={()=>dispatch(setCurrentPage(PromotionsPages.INACTIVE))}>Inactive</button>
  </li>
  <li className="mr-6">
  </li>
</ul> */}
<ul className="flex text-sm font-light">
<li className="mr-6">
    <button className={`text-gray-500  ${
        currentPage === PromotionsPages.ALL_PROMOTIONS ? 'underline' : 'hover:underline'
      }`}  onClick={()=>dispatch(setCurrentPage(PromotionsPages.ALL_PROMOTIONS))}>All Promotions</button>
  </li>
  <li class="mr-6">
    <button className={`text-gray-500  ${
        currentPage === PromotionsPages.ACTIVE ? 'underline' : 'hover:underline'
      }`}  onClick={()=>dispatch(setCurrentPage(PromotionsPages.ACTIVE))}>Active</button>
  </li>
  <li class="mr-6">
    <button className={`text-gray-500  ${
        currentPage === PromotionsPages.INACTIVE ? 'underline' : 'hover:underline'
      }`}  onClick={()=>dispatch(setCurrentPage(PromotionsPages.INACTIVE))}>Inactive</button>
  </li>
  </ul>
  
    </div>

    {/** searchbar and Most Recent*/}
    <div className='grid grid-cols-12 my-2'>
    <div className='col-span-6'>
    <div className="flex items-center border-gray-300 border rounded-xl p-1">
    <Search className="text-gray-500" />

      <input
        className="outline-none bg-transparent flex-grow"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
    </div>
    {/**most Recent */}
    <div className='col-span-6 flex gap-2 text-right text-xs font-light items-center'>
    <h2 className='text-black w-full text-[14px] text-right'>Most Recent</h2>
    <span><FilterListIcon className='text-gray-500'/></span>
    </div>
    </div>
    

    {/**table */}
    <div className='bg-white shadow-xl rounded-lg mt-5 p-2  h-full w-full'>
      <Promotions searchQuery={searchQuery}/> 
     
    </div>

    </div>
    </Layout>
    </ProtectedRoute>
  )
  }
  export default page
