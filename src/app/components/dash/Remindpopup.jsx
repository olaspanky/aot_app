import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const Remindpopup = ({ rowData, open, handleClose }) => {



  return (
    <div>
      <div className='p-10'>

      <div className='grid place-content-center'>
      <Modal  open={open}  onRequestClose={handleClose} className="w-[60%] m-5 bg-white opacity-75 mx-auto my-auto mt-3 rounded-xl ">

      <div className='rounded-md w-30% p-10 shadow-lg text-black text-sm'>
      <div className='grid grid-cols-2 gap-3'>
      <div className='col-span-1'>
      {/*input field */}
       {/*input field */}
       <div className='flex flex-col w-full mb-3'>
       <label><h3 className="text-xs font-extralight">Rider Name</h3></label>
       <div className='flex rounded-lg border-gray-400 border-2 items-center w-full'>
         <PersonOutlineIcon/>
         <p>Name: {rowData}</p>
       </div>
       </div>
      {/*input field */}
      <div className='flex flex-col  mb-3'>
      <label><h3 className="text-xs font-extralight">Rider Rating</h3></label>
      <div className='grid grid-cols-9 rounded-lg items-center bg-[#CDCDCD]'>
      <input type='file' placeholder='Enter Rider Name' className='col-span-8 text-sm opacity-0 inset-0
      outline-none border-gray-300 rounded-md p-2
       file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-200 file:text-black
      hover:file:bg-violet-100'/>
      <StarHalfOutlinedIcon className=' col-span-1 '/>
      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col mb-3 '>
      <label><h3 className="text-xs font-extralight">Vehicle Purchase Receipt</h3></label>
      <div className='grid grid-cols-9 rounded-lg items-center bg-[#CDCDCD]'>
      <input type='file' placeholder='Enter Rider Name' className='col-span-8 text-sm opacity-0 inset-0
      outline-none border-gray-300 rounded-md p-2
       file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-200 file:text-black
      hover:file:bg-violet-100'/>
      <FileDownloadOutlinedIcon className=' col-span-1 '/>
    </div>
      </div>
      {/*input field */}
      <div className='flex flex-col  mb-3'>
      <label><h3 className="text-xs font-extralight">Rider Name</h3></label>
      <div className='grid grid-cols-9 rounded-lg items-center bg-[#CDCDCD]'>
      <input type='file' placeholder='Enter Rider Name' className='col-span-8 text-sm opacity-0 inset-0
      outline-none border-gray-300 rounded-md p-2
       file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-200 file:text-black
      hover:file:bg-violet-100'/>
      <FileDownloadOutlinedIcon className=' col-span-1 '/>
    </div>
      </div>

      </div>
      <div className='col-span-1'>
      {/*input field */}
      <div className='flex flex-col  mb-3'>
      <label><h3 className="text-xs font-extralight">Rider Rating</h3></label>
      <div className='grid grid-cols-9 rounded-lg items-center bg-[#CDCDCD]'>
      <input type='file' placeholder='Enter Rider Name' className='col-span-8 text-sm opacity-0 inset-0
      outline-none border-gray-300 rounded-md p-2
       file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-200 file:text-black
      hover:file:bg-violet-100'/>
        <FileDownloadOutlinedIcon className=' col-span-1 '/>
      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col mb-3 '>
      <label><h3 className="text-xs font-extralight">Rider Rating</h3></label>
      <div className='grid grid-cols-9 rounded-lg items-center bg-[#CDCDCD]'>
      <input type='file' placeholder='Enter Rider Name' className='col-span-8 text-sm opacity-0 inset-0
      outline-none border-gray-300 rounded-md p-2
       file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-200 file:text-black
      hover:file:bg-violet-100'/>
        <FileDownloadOutlinedIcon className=' col-span-1 '/>
      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col mb-3 '>
      <label><h3 className="text-xs font-extralight">Vehicle Purchase Receipt</h3></label>
      <div className='grid grid-cols-9 rounded-lg items-center bg-[#CDCDCD]'>
      <input type='file' placeholder='Enter Rider Name' className='col-span-8 text-sm opacity-0 inset-0
      outline-none border-gray-300 rounded-md p-2
       file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-200 file:text-black
      hover:file:bg-violet-100'/>
      <FileDownloadOutlinedIcon className=' col-span-1 '/>
    </div>
      </div>
      {/*input field */}
      <div className='flex flex-col mb-3 '>
      <label><h3 className="text-xs font-extralight">Rider Name</h3></label>
      <div className='grid grid-cols-9 rounded-lg items-center bg-[#CDCDCD]'>
      <input type='file' placeholder='Enter Rider Name' className='col-span-8 text-sm opacity-0 inset-0
      outline-none border-gray-300 rounded-md p-2
       file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-200 file:text-black
      hover:file:bg-violet-100'/>
      <FileDownloadOutlinedIcon className=' col-span-1 '/>
    </div>
      </div>

      </div>





      </div>
      <div className='flex flex-col gap-3 justify-center items-center pt-10 '>
      <button className='bg-[#FF7D00]  inline-block rounded-lg py-2 w-[30%] border-2 border-[#FF7D00] text-white'><h2>Remind</h2></button>
      <button className='px-3 rounded-lg py-2 border-2 w-[30%] border-[#FF7D00] text-[#FF7D00]'><h2>see deliveries</h2></button>
      </div>
      </div>
      </Modal>
      </div>



      </div>
    </div>
  )
}

export default Remindpopup
