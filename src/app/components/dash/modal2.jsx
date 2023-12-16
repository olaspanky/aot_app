import { Dialog, DialogTitle, DialogContent, DialogActions, Button, makeStyles } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@emotion/react';


const ModalComponent = ({ rowData, open, handleClose }) => {
  return (
    <div className='w-[70%] bg-white'>
    <Dialog className='rounded-xl' open={open} onClose={handleClose}>
      <DialogContent>
      <div className='text-right'>
      <DialogActions>
      <CloseOutlinedIcon onclick={handleClose} />

    </DialogActions>
      </div>
        
        <div className=' grid place-content-center '>
      <div className=" bg-white opacity-75 mx-auto my-auto mt-3 rounded-xl ">

      <div className='rounded-xl shadow-lg text-black text-sm'>
      <div className='grid grid-cols-2 gap-3 m-5'>
      <div className='col-span-1  flex flex-col h-full'>
      {/*input field */}
       {/*input field */}
       <div className='flex flex-col w-full mb-3 flex-grow'>
       <label><h3 className="text-xs font-extralight">Customer's Name</h3></label>
       <div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
         <PersonOutlineIcon className='col-span-1'/>
         <p className='col-span-8 p-2'>{rowData.name}</p>
        
       </div>
       </div>
      {/*input field */}
      <div className='flex flex-col w-full mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Customer's Name</h3></label>
      <div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
        <PersonOutlineIcon className='col-span-1'/>
        <p className='col-span-8 p-2'>{rowData.riderName}</p>
       
      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col w-full mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Order Location</h3></label>
      <div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
        <PersonOutlineIcon className='col-span-1'/>
        <p className='col-span-8 p-2'>{rowData.orderLocation}</p>
       
      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col w-full mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Order Location</h3></label>
      <div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
        <PersonOutlineIcon className='col-span-1'/>
        <p className='col-span-8 p-2'>{rowData.orderDate}</p>
       
      </div>
      </div>

      </div>


      <div className='col-span-1 flex flex-col h-full'>
      {/*input field */}
      <div className='flex flex-col w-full mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Customer Email</h3></label>
      <div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
        <PersonOutlineIcon className='col-span-1'/>
        <p className='col-span-8 p-2'>{rowData.email}</p>
       
      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col w-full mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Rider Phone Number</h3></label>
      <div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
        <PersonOutlineIcon className='col-span-1'/>
        <p className='col-span-8 p-2'>{rowData.riderNumber}</p>
       
      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col w-full mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Goods Category</h3></label>
      <div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
        <PersonOutlineIcon className='col-span-1'/>
        <p className='col-span-8 p-2'>{rowData.goodCategory}</p>
       
      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col w-full mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Order Time</h3></label>
      <div className='grid grid-cols-9 border border-[#CDCDCD] rounded-lg items-center'>
        <PersonOutlineIcon className='col-span-1'/>
        <p className='col-span-8 p-2'>{rowData.orderDate}</p>
       
      </div>
      </div>

      </div>





      </div>
      <div className='flex flex-col gap-3 justify-center items-center pt-5 '>
      <button className='bg-[#FF7D00]  inline-block rounded-lg py-2 w-[30%] border-2 border-[#FF7D00] text-white'><h2>Add faq</h2></button>
      </div>

     



      </div>
      </div>
      </div>
     
      </DialogContent>
     
    </Dialog>
    </div>
  );
};

export default ModalComponent