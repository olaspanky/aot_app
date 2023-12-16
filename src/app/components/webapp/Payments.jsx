
"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import cash from "../../../assets/cash.png"
import wallet from "../../../assets/wallet.png"
import cc from "../../../assets/cc.png"
import Link from 'next/link'
import { useMakeCardPaymentMutation } from '@/app/api/apiSlice'




// Modal component for cash on delivery
const CashOnDeliveryModal = ({ isOpen, onClose }) => {
    const [makeCardPayment, { isLoading, isError, isSuccess, error, data }] = useMakeCardPaymentMutation();

    const handleCashOnDeliveryPayment = async () => {
      try {
        const paymentMethodData = {
          cardId: "", // Fill in the card ID if required for your logic
          payment_method: 'cash-on-delivery',
          order_id: "", // Fill in the order ID if required for your logic
          save_card: "", // Fill in the save_card if required for your logic
        };
  
        const response = await makeCardPayment(paymentMethodData);
        console.log('Cash on delivery payment result:', response);
        onClose(); // Close the modal or handle next steps after successful payment
      } catch (error) {
        // Handle error
        console.error('Cash on delivery payment error:', error);
      }
    };
    
      if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        {/* Content for Cash on Delivery modal */}
        <h2 className="text-2xl font-bold mb-4">Cash On Delivery</h2>
        {/* Other content specific to Cash on Delivery */}
        <button
          onClick={handleCashOnDeliveryPayment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Proceed with Cash on Delivery
        </button>
        <button onClick={onClose}>Close</button>


      </div>
    </div>
  );
};

// Modal component for wallet payment
const WalletModal = ({ isOpen, onClose }) => {
  const [makeCardPayment, { isLoading, isError, isSuccess, error, data }] = useMakeCardPaymentMutation();

  const handleWalletPayment = async () => {
    try {
      const paymentMethodData = {
        cardId: "", // Fill in the card ID if required for your logic
        payment_method: 'wallet',
        order_id: "", // Fill in the order ID if required for your logic
        save_card: "", // Fill in the save_card if required for your logic
      };

      const response = await makeCardPayment(paymentMethodData);
      console.log('Cash on delivery payment result:', response);
      onClose(); // Close the modal or handle next steps after successful payment
    } catch (error) {
      // Handle error
      console.error('Cash on delivery payment error:', error);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        {/* Content for Wallet modal */}
        <h2 className="text-2xl font-bold mb-4">Wallet Payment</h2>
        {/* Other content specific to Wallet payment */}
        <button
          onClick={handleWalletPayment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Proceed with Wallet
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Modal component for card payment
const CardModal = ({ isOpen, onClose }) => {
  const [rememberCard, setRememberCard] = useState(false);
  const [makeCardPayment, { isLoading, isError, isSuccess, error, data }] = useMakeCardPaymentMutation();

  

  const handleCardPayment = async () => {
    try {
      const paymentMethodData = {
        cardId: "", // Fill in the card ID if required for your logic
        payment_method: 'wallet',
        order_id: "", // Fill in the order ID if required for your logic
        save_card: rememberCard, // Use the rememberCard state value
      };

      const response = await makeCardPayment(paymentMethodData);
      console.log('Card payment result:', response);
      onClose(); // Close the modal or handle next steps after successful payment
    } catch (error) {
      // Handle error
      console.error('Card payment error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-md w-96">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Card Payment</h1>
          {/* Checkbox for remembering the card */}
          <label htmlFor="rememberCard" className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberCard"
              checked={rememberCard}
              onChange={(e) => setRememberCard(e.target.checked)}
              className="mr-2"
            />
            Remember Card
          </label>
        </div>
        {/* Other content specific to Card payment */}
        <button
          onClick={handleCardPayment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Pay
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};




const page = () => {

  const [cashOnDeliveryModalOpen, setCashOnDeliveryModalOpen] = useState(false);
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = React.useState(''); // Initialize with the value of the default selected option
const handleOptionChange = (e) => {
  setSelectedOption(e.target.value);
};



  
    
    return (
     

    
   
      // New UI
      <div>




<div className='col-span-4 p-5 '>
<div className='bg-white flex flex-col flex-grow h-auto p-5 rounded-md'>
      <div className='flex-grow flex py-3 flex-col gap-9'>
<div className='flex flex-col gap-3 '>

<div className='flex flex-col text-center gap-5 font-bold'>
<h1 className='text-[22px]'>Payment</h1>
<h1 className='text-[18px]'>Select your prefered Payment Method</h1>
</div>

<div className='flex flex-col gap-5 my-5 text-[14px] font-light'>
  <div className='grid grid-cols-12 gap-3 justify-center items-center'>
    <div className='col-span-1'> <Image src={cash} alt="" width="" height=""/></div>
    <div className='col-span-11 flex justify-between'><h1>Cash On Delivery</h1>
    <div ><input         onChange={handleOptionChange}
 onClick={() => setCashOnDeliveryModalOpen(true)} type='radio' className='outline-none border-transparent'/></div>
    </div>
  </div>

  <div className='w-full border border-2-black my-1'></div>
  <div className='grid grid-cols-12 gap-3 justify-center items-center'>
    <div className='col-span-1'> <Image src={wallet} alt="" width="" height=""/></div>
    <div className='col-span-11 flex justify-between'><h1>Wallet</h1>
    <div ><input         onChange={handleOptionChange}
 onClick={() => setWalletModalOpen(true)} type='radio' className='outline-none border-transparent'/></div>
    </div>
  </div>

  <div className='w-full border border-2-black my-1'></div>
  <div className='grid grid-cols-12 gap-3 justify-center items-center'>
    <div className='col-span-1'> <Image src={cc} alt="" width="" height=""/></div>
    <div className='col-span-11 flex justify-between'><h1>Credit/Debit Card</h1>
    <div ><input         onChange={handleOptionChange}
 onClick={() => setCardModalOpen(true)} type='radio' className='outline-none border-transparent'/></div>
    </div>
  </div>

  <div className='w-full border border-2-black mt-9 font-bold'></div>
  <div className='col-span-11 flex justify-between'><h1 className='font-bold'>Total</h1>
    <div ><p className='font-bold'>#2,000</p></div>
    </div>

    <CashOnDeliveryModal isOpen={cashOnDeliveryModalOpen} onClose={() => setCashOnDeliveryModalOpen(false)} />
      <WalletModal isOpen={walletModalOpen} onClose={() => setWalletModalOpen(false)} />
      <CardModal isOpen={cardModalOpen} onClose={() => setCardModalOpen(false)} />


</div>


</div>

  {/*icons */}
  
  </div>

  <div className='footer w-full  grid mb-36 place-content-center'>
  
  <Link href="/webapp/tracking" passHref>

    <button  className='  grid grid-cols-12 items-center  bottom-2 m-3 rounded-lg border bg-[#ff7d00] py-3 px-20 text-[16px] text-white text-center'>
    <h1 className='col-span-11'>Proceed</h1>
    </button>
    </Link>
    </div>

  </div>
</div>






</div>
    
    
    
      
    )
  }
  
  export default page


