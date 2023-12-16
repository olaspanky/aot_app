import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useUpdatePromoCodeMutation } from '../../api/apiSlice';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import lol from '../../../assets/discount.png';
import ticket from '../../../assets/ticket.png';
import calender from '../../../assets/calender.png';
import clock from '../../../assets/clock.png';
import Image from 'next/image';


function PromoModal({ isOpen, onClose, promoCodeData, onSave }) {
  const [editedData, setEditedData] = useState(promoCodeData || {});


  const [updatePromoCode] = useUpdatePromoCodeMutation();
  console.log("modalpromo", promoCodeData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("submitpromo", promoCodeData);
  
    try {
      const id = promoCodeData.discount_id;
      console.log("id is", id);
      const { ...data } = editedData;
      await updatePromoCode({ id, data });
      onSave(editedData);
      onClose();
    } catch (error) {
      // Handle the error (e.g., show an error message)
    }
  };
  

  return (
    <div className='w-[70%] bg-white'>
      <Dialog className='rounded-xl' open={isOpen} onClose={onClose}>
        <DialogContent>
          <div className='text-right'>
            <DialogActions>
              <CloseOutlinedIcon onClick={onClose} />
            </DialogActions>
          </div>
          {promoCodeData ? (
            <form onSubmit={handleSubmit}>
             
             <div >
        <div className="grid grid-cols-2 gap-9 m-5 pt-9">
        <div className="col-span-1 flex flex-col h-full">
          {/* Promo Code */}
          <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Promo Code</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
              <Image src={ticket} alt="ticket" />
              <input
   className='col-span-8'
            type='text'
            name='created'
            value={editedData.created || ''}
            placeholder={promoCodeData.discount_code}
            onChange={handleChange}
          />
            </div>
          </div>
          {/* Expiration Date */}
          <div className="flex flex-col mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Expiration date</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
              <Image src={calender} alt="calendar" />
              <input
           className='col-span-8'

            type='date'
            name='description'
            value={editedData.description || ''}
            placeholder={promoCodeData.description}
            onChange={handleChange}
          />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col h-full">
          {/* Discount */}
          <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Discount %</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
            <Image src={lol} alt="" className="w-[20px] h-[20px]" />
            <input
            type='text'
            name='discount'
            value={editedData.discount || ''}
            onChange={handleChange}
          />
            </div>
          </div>
          {/* Expiration Time */}
          <div className="flex flex-col mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Expiration Time</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
              <Image src={clock} alt="clock" />
              <input
            type='int'
            name='discount'
            value={editedData.time || ''}
            onChange={handleChange}
          />    
            </div>
          </div>
        </div>
      </div>

     

      <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Description</h3>
            </label>
      <div className="m-5 p-3 flex gap-2 border-[#CDCDCD] w-full border-2 rounded-md">
        <Image src={ticket} alt="" className="w-[20px] h-[20px]" />
        <textarea
          value=""
          placeholder="yada yadbjkzcnklsbnkljkvzbzlkmvl;nxclkvjl;xzc"
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
        
      <div className="flex flex-col gap-3 justify-center items-center py-9">
        <button
        
          type="submit"
          className="bg-[#FF7D00] inline-block rounded-lg py-2 w-[30%] border-2 border-[#FF7D00] text-white"
        >
          <h2>Add Staff</h2>
        </button>
      </div>
            </form>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PromoModal;
