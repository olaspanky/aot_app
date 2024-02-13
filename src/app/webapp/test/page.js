
"use client"
import React from 'react'
import Layout from "../../shared/Layout3"
import map from "../../../../public/map.png"
import { useState } from 'react'
import Track from '@/app/components/webapp/Track2'
import Rating from '@/app/components/webapp/Rating'

const page = () => {
    
    return (
        <Layout>
        <div>
<div className=''>





<div className='relative'>





<div className='grid grid-cols-1 absolute top-0 w-full h-[80%] '>
<div className='mt-5  h-12 bg-white col-span-1 ml-5 mr-5 rounded-lg flex items-center'> 
<h1 className='text-xl font-bold p-5 '>Tracking</h1>
</div>
<div className='grid grid-cols-12'> 
<div className='col-span-8 '></div>
<div className='col-span-4 '>
  



<Track/>
<Rating/>




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


