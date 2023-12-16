import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Image from 'next/image';
import { useCreateUserMutation } from '../../api/apiSlice';
import lol from '../../../assets/discount.png';
import ticket from '../../../assets/ticket.png';
import calender from '../../../assets/calender.png';
import clock from '../../../assets/clock.png';

const AddstaffModal = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const { data, error, isLoading, isError } = useCreateUserMutation();

  const handleOpen = () => {
    console.log('Modal opened');
    setOpen(true);
  };

  const handleClose = () => {
    console.log('Modal closed');
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      email: email,
      phone_number: phone,
      role: role,
    };

    try {
      const response = await useCreateUserMutation(userData);

      if (response.data && !isError) {
        // Handle success
        console.log('Promotion created:', response.data);
      } else {
        // Handle error
        console.error('Error creating promotion:', response.error);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Network error:', error);
    }
  };
  return (
    <div>

      {/* <Button variant="contained" onClick={handleOpen}>
        Create
      </Button> */}
      <button onClick={handleOpen} className='bg-[#FF7D00] px-20 py-2 rounded-md text-white'>
        Add Staff
      </button>
      <Modal open={open} onClose={handleClose}>
              <form onSubmit={handleSubmit}>

        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
        <div className="grid grid-cols-2 gap-9 m-5 pt-9">
        <div className="col-span-1 flex flex-col h-full">
          {/* Promo Code */}
          <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Name</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
              <Image src={ticket} alt="ticket" />
              <input
                type="text"
                placeholder="Enter Promo Code"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[90%] text-sm outline-none border-none"
              />
            </div>
          </div>
          {/* Expiration Date */}
          <div className="flex flex-col mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Phone Number</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
              <Image src={calender} alt="calendar" />
              <input
                type="text"
                placeholder="Enter Expiration Date"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-[90%] text-sm outline-none border-none"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col h-full">
          {/* Discount */}
          <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Email Address</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
            <Image src={lol} alt="" className="w-[20px] h-[20px]" />
              <input
                type="text"
                placeholder="Enter Discount"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[90%] text-sm outline-none border-none"
              />
            </div>
          </div>
          {/* Expiration Time */}
          <div className="flex flex-col mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Role</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
              <Image src={clock} alt="clock" />
              <input
                type="text"
                placeholder="Enter Expiration Time"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-[90%] text-sm outline-none border-none"
              />
            </div>
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
        </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddstaffModal;
