"use client"
import React from 'react'
import Layout from '../../shared/Layout3'
import cash from "../../../assets/cash.png"
import cc from "../../../assets/cc.png"
import Image from 'next/image'
import {transactions} from "../../dash/data/disputedata"
import "../../shared/scrollbar.css"
import { CloudDownload, CloudUpload } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react'



const page = () => {
  const [uiState, setUiState] = useState('home');

  const handleRequestClick = () => {
    // Toggle the state when the button is clicked
    setUiState('addCard');
  };

  const handleBackClick = () => {
    // Switch to the previous state when the back button is clicked
      setUiState('home');
  };

  return (
    <Layout>
    <div >
      <div className=''>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-[32px] p-2'>Profile</h1>
    </div>

    <div className='w-[80%] h-auto container overflow-y-scroll px-3 md:px-5  border border-gray-200 shadow-lg p-9 '>
        <div className='flex flex-col gap-9'>
            <div className='w-36 h-36 rounded-full bg-black'></div>
            <div>
                 {/*inputs div */}
      <section className='mt-3 flex flex-col gap-3 text-[12px]'>
        <div className='flex gap-5 w-full'>
      <div className='w-full'>
      <h2>First Name</h2>
      <input className="w-full p-3 border rounded-lg" type="email" placeholder="John"  />
      </div>

      <div className='w-full'>
      <h2>Last Name</h2>
      <input className="w-full p-3 border rounded-lg" type="email" placeholder="Doe"  />
      </div>
      </div>

    <div className='flex gap-5 w-full'>
      <div className='w-full'>
      <h2>Phone Number</h2>
      <input className="w-full p-3 border rounded-lg" type="email" placeholder="0906456541"  />
      </div>

      <div className='w-full'>
      <h2>Email Address</h2>
      <input className="w-full p-3 border rounded-lg" type="email" placeholder="Doe@gmail.com"  />
      </div>
      </div>
      
      
      </section>

      <div>
      <button className='w-[30%] my-9 rounded-lg text-white p-3 bg-[#FFBE80] text-center'>
      <h1>save Changes</h1>
      </button>
      </div>
            </div>
        </div>
    </div>
    </div>
    </div>
 
    </Layout>
  )
}

export default page
