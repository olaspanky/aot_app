"use client"
import React from 'react'
import Layout from '../../shared/Layout3'
import { useDispatch } from 'react-redux';
import Delivery from "../../components/webapp/Delivery"
import ProtectedRoute2 from '@/app/components/Protectapp'
import { setSearchQuery, setFilteredUsers } from '@/store/slice/searchSlice'; // Import your Redux actions
import { useSelector } from 'react-redux'; 
import { useState } from 'react';
import { Search } from '@mui/icons-material'




const page = () => {
  const dispatch=useDispatch();
  const user = useSelector((state) => state.user);
  const [searchQuery, setSearchQueryLocal] = useState(''); // Local state to handle input

  const handleSearch = (query) => {
    // Update local state
    setSearchQueryLocal(query);
  
    // Dispatch Redux action to update search query
    dispatch(setSearchQuery(query));
  
    // Perform filtering logic to calculate filtered users
    const filteredUsers = filteredUsersState.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  
    // Dispatch Redux action to update filtered users list
    dispatch(setFilteredUsers(filteredUsers));
  };

  return (
    <ProtectedRoute2>

    <Layout>
    
    <div className=' mt-10 mx-20'>
    <div className=' bg-white my-5 text-black rounded-lg w-full border border-gray-200 p-2'>
    <h1 className='text-black font-semibold text-md'>My Deliveries</h1>
    </div>

    <div className='flex gap-5 items-center '>
      <h1 className='text-sm font-semibold '>Total Deliveries</h1>
    <div className="  items-center border-gray-300 border rounded-xl p-1">
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

   

    

    

    {/**table */}
    <div className='bg-white shadow-xl rounded-lg mt-5 p-2  h-full w-full'>
    <Delivery/>
    </div>

    </div>
    </Layout>
    </ProtectedRoute2>

  )
}

export default page
