
// "use client"
// import React from 'react'
// import Layout from "../../shared/Layout3"
// import map from "../../../../public/map.png"
// import { useState } from 'react'
// import Map from '@/app/components/webapp/Map'
// import Track from '@/app/components/webapp/Track'
// import ProtectedRoute2 from '@/app/components/Protectapp'

// const page = () => {
//     const [directionResponse, setDirectionResponse] = useState(null);
//   const [distance, setDistance] = useState('');
//   const [duration, setDuration] = useState('');
//   // other state variables and functions related to map data

//   const handleMapData = (data) => {
//     // Update state based on the received map data
//     setDirectionResponse(data.directionResponse);
//     setDistance(data.distance);
//     setDuration(data.duration);
//     // Update other state variables as needed
//   };
//     return (
//         <ProtectedRoute2>
//         <Layout>
//     <div className=' bg-white w-full  text-black h-auto'>
//     <div className=' bg-white w-[auto]  flex mt-[55px]'>    
//     <div className='mr-auto w-full '>
//     <h1 className='text-black text-[32px] '>Tracking</h1>
//     </div>

   
//     </div>


    


//     <div className=' grid grid-cols-12 gap-3 w-[98%] h-[70%] mt-10'>
//     <div
//     className="h-screen col-span-7 flex flex-col  w-full h-auto bg-image bg-cover bg-center "
//     style={{
//       backgroundImage: `url(${map.src})`,
//     }}
//     >
      //    <Map
      //   onMapDataChange={handleMapData}
      //   // Pass other necessary props to Map component
      // />

   
//     </div>

//     <div className='col-span-5 flex flex-col flex-grow h-screen '>
    // <Track
    //     directionResponse={directionResponse}
    //     distance={distance}
    //     duration={duration}
    //     // Pass other necessary props to OtherComponent
    //   />

//     </div>


//     </div>
//     </div>
    
//     </Layout>
//     </ProtectedRoute2>
//     )
//   }
  
//   export default page


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
        onMapDataChange={handleMapData}
        // Pass other necessary props to Map component
      />
</div>

<div className='grid grid-cols-1 absolute top-0 w-full h-[80%] '>
<div className='mt-5  h-12 bg-white col-span-1 border border-gray-200 ml-5 mr-5 rounded-lg flex items-center p-7 justify-between'> 
    <h1 className='text-xl font-bold  '>Tracking</h1>
    <div className='rounded-full p-3 bg-slate-200 '>pix</div>
    </div>
<div className='grid grid-cols-12'> 
<div className='col-span-8 '></div>
<div className='col-span-4 '>
<div className='bg-white p-8 rounded-lg m-9'>

  



<Track
        directionResponse={directionResponse}
        distance={distance}
        duration={duration}
        // Pass other necessary props to OtherComponent
      />



</div>
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



