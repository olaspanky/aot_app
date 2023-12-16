import { Dialog, DialogTitle, DialogContent, DialogActions, Button, makeStyles } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@emotion/react';
import ticket from "../../../assets/ticket.png";
import Image from 'next/image';
import location from "../../../assets/location.png";
import phone from "../../../assets/phone.svg";
import calender from "../../../assets/calender.png";
import bag from "../../../assets/bag.png";
import email from "../../../assets/email.png";
import clock from "../../../assets/clock.png";


const ModalComponent = ({ rowData, riderDetails, open, handleClose }) => {
  console.log('ModalComponent - riderDetails:', riderDetails);
  console.log('Modalrow:', rowData);

  return (
    <div className='w-[70%] bg-white rounded-2xl'>
    <Dialog className='rounded-xl' open={open} onClose={handleClose}>
      <DialogContent>
      <div className='text-right'>
      <DialogActions>
      <CloseOutlinedIcon onclick={handleClose} />

    </DialogActions>
      </div>
        
      {rowData ? (

        <div className=' grid place-content-center '>
      <div className=" bg-white opacity-75 mx-auto my-auto mt-3 rounded-xl ">

      <div className='rounded-xl text-black text-sm'>
      <div className='grid grid-cols-2 gap-3 m-5'>
      <div className='col-span-1  flex flex-col h-full'>
      {/*input field */}
       {/*input field */}
       <div className='flex flex-col w-full mb-3 flex-grow'>
       <label><h3 className="text-xs font-extralight">Customer Name</h3></label>
       <div className='grid grid-cols-9 gap-[36px] border border-[#CDCDCD] rounded-lg items-center'>
         <PersonOutlineIcon className='col-span-1'/>
         <p className='col-span-8 p-2'>{riderDetails.data.customer_name}</p>
        
       </div>
       </div>
      {/*input field */}
      <div className='flex flex-col  mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Rider Name</h3></label>
      <div className='grid grid-cols-9 gap-[36px] border border-[#CDCDCD] rounded-lg items-center'>
         <PersonOutlineIcon className='col-span-1'/>
         <p className='col-span-8 p-2'>{riderDetails.data.rider.name}</p>
        
       </div>
      
      </div>
      {/*input field */}
      <div className='flex flex-col mb-3  flex-grow'>
      <label><h3 className="text-xs font-extralight">Order Location</h3></label>
      <div className='grid grid-cols-9 gap-3 border border-[#CDCDCD] rounded-lg items-center'>
        <div className='col-span-1 w-full grid place-content-center'>
        <Image src={location} alt="" className="w-5 h-5" />
        </div>
       <p className='col-span-8 p-2'>{riderDetails.data.order.to_address}</p>

    </div>
      </div>
      {/*input field */}
      <div className='flex flex-col  mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Order Date</h3></label>
      <div className='grid grid-cols-9 gap-3 border border-[#CDCDCD] rounded-lg items-center'>
      <div className='col-span-1 w-full grid place-content-center'>
        <Image src={calender} alt="" className="w-5 h-5" />
        </div>
              <p className='col-span-8 p-2'>{riderDetails.data.order.date}</p>

    </div>
      </div>

      </div>


      <div className='col-span-1 flex flex-col h-full'>
      {/*input field */}
      <div className='flex flex-col  mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Customer Email</h3></label>
      <div className='grid grid-cols-9 gap-3 border border-[#CDCDCD] rounded-lg items-center'>
      <div className='col-span-1 w-full grid place-content-center'>
        <Image src={email} alt="" className="w-5 h-5" />
        </div>
      <p className='col-span-8 p-2'>{rowData.row.customer_email}</p>

      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Rider Phone Number</h3></label>
      <div className='grid grid-cols-9 gap-3 border border-[#CDCDCD] rounded-lg items-center'>
      <div className='col-span-1 w-full grid place-content-center'>
        <Image src={phone} alt="" className="w-5 h-5" />
        </div>
      <p className='col-span-8 p-2'>{riderDetails.data.order.phone}</p>

      </div>
      </div>
      {/*input field */}
      <div className='flex flex-col mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Goods Category</h3></label>
      <div className='grid grid-cols-9 gap-3 border border-[#CDCDCD] rounded-lg items-center'>
      <div className='col-span-1 w-full grid place-content-center'>
        <Image src={bag} alt="" className="w-5 h-5" />
        </div>
      <p className='col-span-8 p-2'>{rowData.customer_name}</p>
    </div>
      </div>
      {/*input field */}
      <div className='flex flex-col mb-3 flex-grow'>
      <label><h3 className="text-xs font-extralight">Order Time</h3></label>
      <div className='grid grid-cols-9 gap-3 border border-[#CDCDCD] rounded-lg items-center'>
      <div className='col-span-1 w-full grid place-content-center'>
        <Image src={clock} alt="" className="w-5 h-5" />
        </div>
      <p className='col-span-8 p-2'>{riderDetails.data.order.date}</p>

    </div>
      </div>

      </div>

      <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Complaint</h3>
            </label>
      <div className="m-5 p-3 flex gap-2 border-[#CDCDCD] w-full border-2 rounded-md">
        <Image src={ticket} alt="" className="w-[20px] h-[20px]" />
        <textarea
          value=""
          placeholder={riderDetails.data.dispute_description}
          onChange=""
          style={{
            width: '100%',
            height: '50px',
            resize: 'none',
            borderRadius: '4px',
            outline: 'none',
            fontSize: '16px',
            lineHeight: '1.4',
          }}
        />
      </div>
      </div>





      </div>
      <div className='flex flex-col gap-3 justify-center items-center pt-5 '>
      <button className='px-3 rounded-lg py-2 border-2 w-[30%] border-[#FF7D00] text-[#FF7D00]'><h2>Add Faqs</h2></button>
      </div>

     



      </div>
      </div>
      </div>
      ) : (
        <p>Loading dispute details...</p>
      )}
   
     
      </DialogContent>
     
    </Dialog>
    </div>
  );
};

export default ModalComponent