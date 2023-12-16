import { Dialog, DialogTitle, DialogContent, DialogActions, Button, makeStyles } from '@mui/material';
import group from "../../../assets/group.png"
import Image from 'next/image';


const ModalComponent = ({ rowData, open, handleClose }) => {
  return (
    <div className='w-[70%] bg-white'>
    <Dialog className='rounded-xl' open={open} onClose={handleClose}>
      <DialogContent>
      <div className='text-right'>
      <DialogActions>

    </DialogActions>
      </div>

      <div className='flex flex-col w-96   '>
      {/* location */}
      <div className='grid grid-cols-12 w-full '>
      <div className='col-span-1 h-full w-full grid place-content-center'><Image src={group} width="" height=""/></div>
      {/* street names */}
      <div className='col-span-11 flex flex-col gap-3'>
      <div><h2 className='text-[16px] font-normal '>8, Ogbe Street</h2><h2 className='text-[12px]'>8:09</h2></div>
      <div><h2 className='text-[16px] font-normal'>Godwin Abbey Cresent</h2><h2 className='text-[12px]'>8:09</h2></div>
      </div>
      </div>
      {/* Goods delivered */}
        <div className='flex flex-col my-5'>
        <div className=''><h2 className='text-[16px] font-bold'>Goods delivered</h2></div>
        <div className='flex justify-between'>
        
        <div><h2>2x airpods</h2></div>
        <div className='bg-[#C4C4C4] text-[8px] rounded-lg p-2'><h2>2x airpods</h2></div>
        
        </div>
        </div>

        {/* Payment */}
        <div className='flex flex-col gap-3 '>
        <div className=''><h2 className='text-[16px] font-bold'>Payment</h2></div>
        <div className='flex justify-between'>
        
        <div><h2>2x airpods</h2></div>
        <div className=' p-2'><h2>2500</h2></div>
        
        </div>

        
        <div className='flex justify-between'>
        
        <div><h2>2x airpods</h2></div>
        <div className=' p-2'><h2>70</h2></div>
        
        </div>

        <div className='w-full border border-black'></div>

        <div className='flex justify-between text-[16px] font-bold'>
        
        <div><h2 className=''>Total</h2></div>
        <div className=' p-2'><h2>2000</h2></div>
        
        </div>

        {/* cash on delivery */}
        <div className='flex justify-between text-[14px]'>
        
        <div><h2 className=''>Cash on delivery</h2></div>
        
        </div>
       


        </div>

         {/* button */}
         <div className='flex flex-col gap-3 items-center justify-center mt-10'>
         <button className='w-[70%] rounded-lg border bg-[#FF7D00] p-3 text-[16px] text-[#f7f6f5] text-center'>
         <h1>Download Receipt</h1>
         </button>

         <p className='text-[12px]'>Having ride issues? Get Help.</p>
         </div>


      </div>
        
        
     
      </DialogContent>
     
    </Dialog>
    </div>
  );
};

export default ModalComponent