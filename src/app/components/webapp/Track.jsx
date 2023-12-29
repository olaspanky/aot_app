"use client"

import * as React from 'react';
import guyy from "../../../assets/guy.png"
import protect from "../../../assets/protect.png"
import sms from "../../../assets/sms.png"
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useGetTrackingOrdersQuery } from '@/app/api/apiSlice';

export default function Table({ duration }) {
    const [remainingMinutes, setRemainingMinutes] = useState(0);

    const { data, isLoading, isError } = useGetTrackingOrdersQuery();
    console.log("data", data)


    
    

  

  useEffect(() => {
    const parsedDuration = parseDuration(duration);
    setRemainingMinutes(parsedDuration);

    const interval = setInterval(() => {
      setRemainingMinutes((prevMinutes) => {
        if (prevMinutes > 0) {
          return prevMinutes - 1;
        }
        clearInterval(interval);
        return 0;
      });
    }, 60000); 

    return () => clearInterval(interval); 
  }, [duration]);

  const parseDuration = (durationString) => {
    const segments = durationString.split(' ');
  
    let totalMinutes = 0;
    for (let i = 0; i < segments.length; i++) {
      if (segments[i] === 'hour' || segments[i] === 'hours') {
        totalMinutes += parseInt(segments[i - 1]) * 60; 
      } else if (segments[i] === 'min' || segments[i] === 'mins') {
        totalMinutes += parseInt(segments[i - 1]); 
      }
    }
  
    return totalMinutes;
  };
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>No order to track</div>;
  }

 


  return (
    
    <div  className="h-auto w-[100%] text-[16px]">
            {data && data.length > 0 ? (

      <div>
    <div className='flex-grow flex flex-col gap-9'>

<div>
    <h1 className='text-[24px] font-bold'>Arriving in {remainingMinutes} {remainingMinutes === 1 ? 'Minute' : 'Minutes'} </h1>
</div>

<div>
<h1 className='text-[16px]'>sedan, Red, <span className='font-bold'>BEN193US</span></h1>
</div>

{/*icons */}
<div className='grid space-between grid-cols-12'>
    <div className='col-span-4 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center'><Image src={guyy} alt="" width="" height=""/></div>
    <div className='col-span-4 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center'><Image src={protect} alt="" width="" height=""/></div>
    <div className='col-span-4 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center'><Image src={sms} alt="" width="" height=""/></div>
    
</div>

<div className='border border-[#d4d4d4]'></div>

<div className='flex flex-col gap-3'>
    <h1 className='text-[24px] font-bold'>Goods</h1>
    <h1 className='text-[16px]'></h1>
</div>
<div className='flex flex-col gap-3'>
    <h1 className='text-[24px] font-bold'>Recipient</h1>
    <h1 className='text-[16px]'> </h1>
</div>
</div>
        
       
<div className='footer w-full mt-20  grid mb-0 place-content-center'>
  <button className='  grid grid-cols-12 items-center  bottom-2 m-3 rounded-lg border bg-[#d4d4d4] py-3 px-20 text-[16px] text-center'>
  <h1 className='col-span-11 text-black font-bold'>Cancel Pickup</h1>
  </button>
  </div>
  </div>
    ) : (
      <div>No order to track</div>
    )}
      
    </div>
  );
}

