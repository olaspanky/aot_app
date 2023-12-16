"use client"
import React from 'react'
import Layout from '../../shared/Layout2'
import { Search } from '@mui/icons-material'
import Image from 'next/image'
import Dispute from '../../components/cs/Disputes';
import { useDispatch } from 'react-redux';
import { DisputePages, setCurrentPage } from '@/store/slice/disputeSlice';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react'

const page = () => {
  const dispatch=useDispatch();


 
    const [selectedMessage, setSelectedMessage] = useState(null);
  
    const handleOnMessageClick = (message) => {
      setSelectedMessage(message);
    };

  return (
    <Layout>
    <div className='grid grid-cols-2 '>
    <div className='px-3 col-span-1 flex flex-col border border-white border-r-black h-screen'>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-xl p-2'>Disputes</h1>
    <div className='grid grid-cols-9 gap-3'></div>
    </div>

    <div className="flex items-center border-gray-300 border rounded-xl w-full p-1">
    <Search className="text-gray-500" />

      <input
        className="outline-none bg-transparent flex-grow"
        type="text"
        placeholder="Search..."
      />
    </div>


    <div className='border border-2-black my-3'></div>


    <div className='grid place-content-center p-3'>
    <ul className="flex text-sm font-light justify-between gap-3 items-center w-full">
  <li className="">
    <button className="text-gray-500 hover:underline"  onClick={()=>dispatch(setCurrentPage(DisputePages.ALL_DISPUTES))}>All Disputes</button>
  </li>
  <li className="">
    <button className="text-gray-500 hover:underline"  onClick={()=>dispatch(setCurrentPage(DisputePages.RESOLVED))}>Resolved</button>
  </li>
  <li className="">
    <button className="text-gray-500 hover:underline"  onClick={()=>dispatch(setCurrentPage(DisputePages.UNRESOLVED))}>Unresolved</button>
  </li>
  
</ul>
    </div>

    {/** searchbar and Most Recent*/}
   

    {/**table */}
   
    <div className='bg-white shadow-xl rounded-lg mt-5 h-[400px] overflow-auto'>
    <Dispute onMessageClick={handleOnMessageClick} />
    </div>


    </div>


    {/*display screen */}
    <div className='col-span-1 text-black'>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow ">
        {selectedMessage ? (
            <div className='p-3'>
          <div>
          <div className='w-full py-3 grid place-content-center bg-[#FF7D00]'>            
          <h1 className="text-2xl text-white font-bold mb-4">{selectedMessage.sender}</h1>
          </div>
          <div className='p-4 rounded-lg max-w-[70%] bg-[#D4D4D4] my-2'>

          <p className='  '>{selectedMessage.message}</p>

          </div>
          </div>
          </div>
        ) : (
            <div className='grid place-content-center'>
            <p className="text-xl text-black">Select a dispute to display.</p>

            </div>
        )}
      </div>

      <div className="flex-shrink-0 w-full p-5">
        <div className='flex gap-5 justify-center items-center'>
          {/* ... */}
        </div>
      </div>
    </div>
  </div>
    </div>
    </Layout>
  )
}

export default page
