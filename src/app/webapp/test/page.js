
"use client"
import React from 'react'
import Layout from "../../shared/Layout3"
import map from "../../../../public/map.png"
import { useState } from 'react'
import Map from '@/app/components/webapp/Map'
import Track from '@/app/components/webapp/Track'
import ProtectedRoute2 from '@/app/components/Protectapp'

const page = () => {
    const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  // other state variables and functions related to map data

  const handleMapData = (data) => {
    // Update state based on the received map data
    setDirectionResponse(data.directionResponse);
    setDistance(data.distance);
    setDuration(data.duration);
    // Update other state variables as needed
  };
    return (
        <ProtectedRoute2>
        <Layout>
        <div>
<div className=''>





<div className='relative'>



<div class="flex-grow h-auto ">
<Map 
/>
</div>

<div className='grid grid-cols-1 absolute top-0 w-full h-[80%] '>
<div className='mt-5  h-12 bg-white col-span-1 ml-5 mr-5 rounded-lg flex items-center'> 
<h1 className='text-xl font-bold p-5 '>Tracking</h1>
</div>
<div className='grid grid-cols-12'> 
<div className='col-span-8 '></div>
<div className='col-span-4 '>
  



<Track/>




</div>
</div>

</div>





</div>
</div>

</div>
    </Layout>
    </ProtectedRoute2>
    )
  }
  
  export default page


