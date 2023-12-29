"use client"

import * as React from 'react';
import guyy from "../../../assets/guy.png"
import protect from "../../../assets/protect.png"
import sms from "../../../assets/sms.png"
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useGetTrackingOrdersQuery } from '@/app/api/apiSlice';
import group from "../../../assets/group.png"
import wallet from '../../../assets/wallet.png';
import email from '../../../assets/wallet.png'

export default function Table({ duration }) {
  
 


  return (
    
    <div className='flex flex-col w-96   '>
    
<div className='flex flex-col gap-5'>
    <div>
    <h1 className='text-[24px] font-bold'>Route</h1>
</div>

<div>
<h1 className='text-[16px]'>sedan, Red, <span className='font-bold'>BEN193US</span></h1>
</div>

<div className='border border-1-black w-full bg-black my-2'></div>

</div>

{/*icons */}
<div className='flex  items-center justify-between my-1 '>
    <div className='col-span-6 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center'><Image src={guyy} alt="" width="" height=""/></div>
    <div className='col-span-6 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center'><Image src={sms} alt="" width="" height=""/></div>
    
</div>

<div className='border border-1-black w-full bg-black my-3'></div>


<div>
    <h1 className='text-[24px] font-bold'>Route</h1>
</div>

    {/* location */}
    <div className='grid grid-cols-12 w-full my-5 '>
    <div className='col-span-5 flex flex-col justify-between'>
    <div><h2 className='text-sm font-normal '>Pickup Location</h2></div>
    <div><h2 className='text-sm font-normal'>Delivery Location</h2></div>
    </div>
    <div className='col-span-1 h-full w-full grid place-content-center'><Image src={group} width="" height=""/></div>
    {/* street names */}
    <div className='col-span-5 flex flex-col justify-between'>
    <div><h2 className='text-sm font-normal '>8, Ogbe Street</h2></div>
    <div><h2 className='text-sm font-normal'>Godwin Abbey Cresent</h2></div>
    </div>
    </div>
    {/* Goods delivered */}
      <div className='flex flex-col my-2'>
      <div className=''><h2 className='text-[16px] font-bold'>Goods Picked</h2></div>
      <div className='flex justify-between my-2'>
      
      <div><h2>2x airpods</h2></div>
      
      </div>
      </div>

      <div className='border border-1-black w-full bg-black my-2'></div>
    <div className='flex justify-between items-center'>
        <div className='flex gap-2 '>
        <Image src={email} alt="" className="w-[20px] h-[20px]" />          
        <p>wallet</p>
        </div>
        <div>#2,000</div>
    </div>

    <div className='border border-black w-full bg-black my-5'></div>





    </div>
      
  );
}

