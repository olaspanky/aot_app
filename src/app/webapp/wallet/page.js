"use client"
import React from 'react'
import Layout from '../../shared/Layout3'
import cash from "../../../assets/cash.png"
import cc from "../../../assets/cc.png"
import Image from 'next/image'
import {transactions} from "../../dash/data/disputedata"
import { CloudDownload, CloudUpload } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react'
import { useWalletQuery } from '@/app/api/apiSlice'
import ProtectedRoute2 from '@/app/components/Protectapp'
import CircularProgress from '@mui/material/CircularProgress';





const page = () => {
  const [uiState, setUiState] = useState('home');

  const handleRequestClick = () => {
    // Toggle the state when the button is clicked
    setUiState('addCard');
  };

  const handleBackClick = () => {
    // Switch to the previous state when the back button is clicked
      setUiState('home');
  };

  const { data: walletData, isLoading, isError } = useWalletQuery();
  const { balance, transactions } = walletData?.data || {};
  console.log("wallet", walletData)

  if (isLoading) {
    return <div className='w-full flex justify-center items-center'>      <CircularProgress />
    </div>;
  }

  

  

  return (
    <ProtectedRoute2>
    <Layout>
    {uiState === 'home' && ( <div >
      <div className=''>
      <div className='m-5 border border-gray-200  h-12 bg-white col-span-1 ml-5 mr-5 rounded-lg flex items-center'> 
    <h1 className='text-xl font-bold p-5 ' onClick={handleBackClick}>Request Pickups</h1>
    </div>

    <div className='w-full h-[100vh] container overflow-y-scroll px-3 md:px-36 border border-gray-200 shadow-lg grid flex flex-col justify-center p-3 '>
        <div className='flex flex-col gap-5'>
        <div className=' bg-[#FF7D00] shadow-lg flex justify-center items-center text-center flex-col gap-[5em] py-5 rounded-lg'>
            <div className='flex flex-grow flex-col gap-2 w-96 px-36 text-white '>
            <h1 className='text-white'>Your Balance</h1>
            <h1 className='text-[18px] text-white'>{balance}</h1>
            </div>

            <div>
                <button className='px-9 rounded-md py-2 border border-white text-white bg-[#FF7D00]'>Deposit</button>
            </div>
            </div>


            
        <div className=' flex flex-col '>
        <div><h1 className='text-[18px]'>Payment Method</h1></div>
            
<div className='flex flex-col gap-5 my-5 text-[14px] font-light'>
  <div className='grid grid-cols-12 gap-3 justify-center items-center'>
    <div className='col-span-1'> <Image src={cash} alt="" width="" height=""/></div>
    <div className='col-span-11 flex justify-between'><h1>Cash</h1>
    <div ><input type='checkbox' className='outline-none border-transparent'/></div>
    </div>
  </div>

  <div className='w-full border border-2-black'></div>
  <div className='grid grid-cols-12 gap-3 justify-center items-center'>
    <div className='col-span-1'> <Image src={cc} alt="" width="" height=""/></div>
    <div className='col-span-11 flex justify-between'><h1>Add Credit/Debit Card</h1>
    <div ><KeyboardArrowRightIcon onClick={handleRequestClick}/></div>
    </div>
  </div>
  <div className='w-full border border-2-black'></div>

</div>
        </div>


            
        <div className=' flex flex-col '>
        <div><h1 className='text-[18px]'>Recent Transaction</h1></div>

        <div className='flex flex-col gap-5 my-5 text-[14px] font-light h-auto'>
        {transactions && transactions.map((transaction) => (
  <div className='grid grid-cols-12 gap-3 justify-center items-center' key={transaction.id}>
    <div className='col-span-1'>
    {transaction.type === 'out-flow' ? (
                      <CloudDownload color='secondary' />
                    ) : (
                      <CloudUpload color='primary' />
                    )}
    </div>
    <div className='col-span-11 flex justify-between'>
        <div className='flex flex-col'>
        <h1>{transaction.description}</h1>
        <p>{transaction.date}</p>
        </div>
      <div className={
                  transaction.type === 'out-flow'
                    ? 'text-red-500 font-bold'
                    : 'text-green-500 font-bold'
                }>
        <h1>{transaction.amount}</h1>
      </div>
    </div>
  </div>
))}

            

  
  </div>


</div>
        </div>



        </div>
    </div>
    </div>)}

    {uiState === 'addCard' && (
      <div >
      <div className=''>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-[32px] p-2'>Wallet</h1>
    </div>

    <div className='w-[80%] h-[100vh] container overflow-y-scroll px-3 md:px-36 h-screen border border-gray-200 shadow-lg grid flex flex-col justify-center p-3 '>
    <div className='flex flex-col gap-10 items-center my-7'>
      <div className='flex flex-col gap-5 text-center'>
      <h1 className='font-bold text-[18px]'>Add Card</h1>
      <h1 className='font-semibold text-[14px]'>Enter card details to fund wallet</h1>
      </div>
        {/*inputs div */}
        <section className='mt-3 flex flex-col lg:mx-32 gap-9 text-[14px]'>
      <div className=''>
      <input className="w-full p-3 border rounded-lg bg-[#C4C4C4]" type="email" placeholder="3000"  />

      </div>

      <div className=''>
      <input className="w-full p-3 border rounded-lg bg-[#C4C4C4]" type="email" placeholder="000 xxx 0000 xx56"  />
      </div>
      
      <div className='grid grid-cols-2 gap-3'>
      <input className="col-span-1 w-full p-3 border rounded-lg bg-[#C4C4C4]" type="email" placeholder="12/24/21"  />
      <input className="col-span-1 w-full p-3 border rounded-lg bg-[#C4C4C4]" type="email" placeholder="123"  />

      </div>


      <div className='w-full mt-9'>
      <button className='w-full rounded-lg text-white p-3 bg-[#FF7D00] text-center'>
      <h1>sign in</h1>
      </button>
      </div>
      </section>

     
      </div>    
    </div>



        </div>
    </div>
    
    )}
    
 
    </Layout>
    </ProtectedRoute2>
  )
}

export default page
