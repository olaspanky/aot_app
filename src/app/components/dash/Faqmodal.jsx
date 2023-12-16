// import React, { useState } from 'react';
// import Modal from '@mui/material/Modal';
// import { Button } from '@mui/material';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
// import lol from "../../../assets/discount.png"
// import ticket from "../../../assets/ticket.png"
// import calender from "../../../assets/calender.png"
// import clock from "../../../assets/clock.png"
// import Image from 'next/image';
// import { useCreatePromotionMutation, useGetPromoCodesQuery } from '../../api/apiSlice'; // Import the new mutation


// const SimpleModalExample = () => {
//   const [open, setOpen] = useState(false);
//    const [promoCode, setPromoCode] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [description, setDescription] = useState('');
//   const [expirationDateTime, setExpirationDateTime] = useState('');
//  const { data, error, isLoading } = useGetPromoCodesQuery();
//     const [createPromotion, { isError }] = useCreatePromotionMutation();
  
  

//   const handleOpen = () => {
//     console.log('Modal opened');
//     setOpen(true);
//   };

//   const handleClose = () => {
//     console.log('Modal closed');
//     setOpen(false);
//   };
 

//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       const promotionData = {
//         promo_code: promoCode,
//         discount: parseInt(discount),
//         description,
//         expiration_date_time: expirationDateTime,
//       };
  
//       try {
//         const response = await createPromotion(promotionData);
  
//         if (response.data && !isError) {
//           // Handle success
//           console.log('Promotion created:', response.data);
//         } else {
//           // Handle error
//           console.error('Error creating promotion:', response.error);
//         }
//       } catch (error) {
//         // Handle network or other errors
//         console.error('Network error:', error);
//       }
//     };

//   return (
//     <div>

//       {/* <Button variant="contained" onClick={handleOpen}>
//         Create
//       </Button> */}
//       <button onClick={handleOpen} className='bg-[#FF7D00] px-20 py-2 rounded-md text-white'>
//         Add Faq
//       </button>
//       <Modal open={open} onClose={handleClose}>
//               <form onSubmit={handleSubmit}>

    //     <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
    //     <div className="grid grid-cols-2 gap-9 m-5 pt-9">
    //     <div className="col-span-1 flex flex-col h-full">
    //       {/* Promo Code */}
    //       <div className="flex flex-col w-full mb-3 flex-grow">
    //         <label>
    //           <h3 className="text-xs font-extralight">Categories</h3>
    //         </label>
    //         <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
    //           <Image src={ticket} alt="ticket" />
    //           <input
    //             type="text"
    //             placeholder="Enter Promo Code"
    //             value={promoCode}
    //             onChange={(e) => setPromoCode(e.target.value)}
    //             className="w-[90%] text-sm outline-none border-none"
    //           />
    //         </div>
    //       </div>
    //       {/* Expiration Date */}
          
    //     </div>
    //     <div className="col-span-1 flex flex-col h-full">
    //       {/* Discount */}
    //       <div className="flex flex-col w-full mb-3 flex-grow">
    //         <label>
    //           <h3 className="text-xs font-extralight">Question</h3>
    //         </label>
    //         <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
    //         <Image src={lol} alt="" className="w-[20px] h-[20px]" />
    //           <input
    //             type="text"
    //             placeholder="Enter Discount"
    //             value={discount}
    //             onChange={(e) => setDiscount(e.target.value)}
    //             className="w-[90%] text-sm outline-none border-none"
    //           />
    //         </div>
    //       </div>
    //       {/* Expiration Time */}
        
    //     </div>
    //   </div>

    //   <div className="m-5 p-3 flex gap-2 border-[#CDCDCD] w-[60%] border-2 rounded-md">
    //     <Image src={calender} alt="" className="w-[20px] h-[20px]" />
    //     <textarea
    //       value={description}
    //       onChange={(e) => setDescription(e.target.value)}
    //       style={{
    //         width: '100%',
    //         height: '50px',
    //         resize: 'none',
    //         borderRadius: '4px',
    //         outline: 'none',
    //         fontSize: '16px',
    //         lineHeight: '1.4',
    //       }}
    //     />
    //   </div>

    //   <div className="flex flex-col gap-3 justify-center items-center py-9">
    //     <button
    //       type="submit"
    //       className="bg-[#FF7D00] inline-block rounded-lg py-2 w-[30%] border-2 border-[#FF7D00] text-white"
    //     >
    //       <h2>Create</h2>
    //     </button>
    //   </div>
    //     </div>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default SimpleModalExample;

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import ticket from "../../../assets/ticket.png"
import Image from 'next/image';
import {  useGetPromoCodesQuery, useCreateFAQMutation } from '../../api/apiSlice'; // Import the new mutation

const CreateFaqModal = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const { data, error, isLoading } = useGetPromoCodesQuery();
  const [createFAQ, { isError }] = useCreateFAQMutation();

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

    const faqData = {
      category,
      question,
      answer,
    };

    try {
      const response = await createFAQ(faqData);

      if (response.data && !isError) {
        // Handle success
        console.log('FAQ created:', response.data);
        handleClose();
      } else {
        // Handle error
        console.error('Error creating FAQ:', response.error);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <button onClick={handleOpen} className='bg-[#FF7D00] px-20 py-2 rounded-md text-white'>
        Create FAQ
      </button>
      <Modal open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
        <div className="grid grid-cols-2 gap-9 m-5 pt-9">
        <div className="col-span-1 flex flex-col h-full">
          {/* Promo Code */}
          <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Category</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
              <Image src={ticket} alt="ticket" />
              <input
                type="text"
                placeholder="Enter Promo Code"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-[90%] text-sm outline-none border-none"
              />
            </div>
          </div>
          {/* Expiration Date */}
          
        </div>
        <div className="col-span-1 flex flex-col h-full">
          {/* Discount */}
          <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Question</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
            <Image src={ticket} alt="" className="w-[20px] h-[20px]" />
              <input
                type="text"
                placeholder="Enter Discount"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-[90%] text-sm outline-none border-none"
              />
            </div>
          </div>
          {/* Expiration Time */}
        
        </div>
      </div>

      <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Answer</h3>
            </label>
      <div className="m-5 p-3 flex gap-2 border-[#CDCDCD] w-[60%] border-2 rounded-md">
        <Image src={ticket} alt="" className="w-[20px] h-[20px]" />
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
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

      <div className="flex flex-col gap-3 justify-center items-center py-9">
        <button
          type="submit"
          className="bg-[#FF7D00] inline-block rounded-lg py-2 w-[30%] border-2 border-[#FF7D00] text-white"
        >
          <h2>Create</h2>
        </button>
      </div>
        </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateFaqModal;

