"use client"
import React from 'react'
import Layout from '../../shared/Layout3'
import Image from 'next/image'
import { useState } from 'react'
import notify from "../../../assets/notify.png"



const page = () => {
  const [uiState, setUiState] = useState('home');
  const [isOn, setIsOn] = useState(false);
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);


  const handleRequestClick = () => {
    setUiState('password');
  };

  const handleBackClick = () => {
      setUiState('home');
  };


  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  const handleToggle1 = () => {
    setIsOn1((prevIsOn) => !prevIsOn);
  };
  const handleToggle2 = () => {
    setIsOn2((prevIsOn) => !prevIsOn);
  };

  return (
    <Layout>
         {uiState === 'home' && (
    <div >
      <div className=''>
      <div className='mt-5  h-12 bg-white col-span-1 border border-gray-200 ml-5 mr-5 rounded-lg flex items-center p-7 justify-between'> 
    <h1 className='text-xl font-bold '>Settings</h1>
    <div className='rounded-full p-3 bg-slate-200 '>pix</div>
    </div>

    <div className='flex justify-center items-center container px-3 p-9 '>
       <section className=' mx-9 w-[80%] lg:w-[25%] flex flex-col gap-5 '>
        <div className='flex flex-col w-full gap-2'>
            <h1>General</h1>
            <div className='border rounded-md border-[#CDCDCD] p-1 w-full grid grid-cols-12 justify-center items-center'>
                <div className='col-span-2'><Image src={notify} width="" height=""/></div>
                <div className='col-span-8'><h1>Push Notification</h1></div>
                <div className='col-span-2'>
                <button
      onClick={handleToggle}
      className={`relative w-12 h-6 rounded-full ${isOn ? 'bg-yellow-500' : 'bg-[#cdcdcd]'} focus:outline-none`}
    >
      <span
        className={`block w-6 h-6 rounded-full transform transition-transform ${
          isOn ? 'translate-x-6' : 'translate-x-0'
        } bg-white shadow-md`}
      ></span>
    </button>
                </div>
            </div>
        </div>

        <div className='flex flex-col w-full'>
            <h1>Security</h1>
            <div className='border mt-2 rounded-tr-md rounded-tl-md border-[#CDCDCD] p-1 w-full grid grid-cols-12 justify-center items-center'>
                <div className='col-span-2'><Image src={notify} width="" height=""/></div>
                <div className='col-span-8'><h1>Hide Balance</h1></div>
                <div className='col-span-2'>
                <button
      onClick={handleToggle1}
      className={`relative w-12 h-6 rounded-full ${isOn1 ? 'bg-yellow-500' : 'bg-[#cdcdcd]'} focus:outline-none`}
    >
      <span
        className={`block w-6 h-6 rounded-full transform transition-transform ${
          isOn1 ? 'translate-x-6' : 'translate-x-0'
        } bg-white shadow-md`}
      ></span>
    </button>
                </div>
            </div>

        

            <div className='border border-[#CDCDCD] p-1 w-full grid grid-cols-12 justify-center items-center'>
                <div className='col-span-2'><Image src={notify} width="" height=""/></div>
                <div className='col-span-8'><h1>Face Verification</h1></div>
                <div className='col-span-2'>
                <button
            onClick={handleToggle2}
      className={`relative w-12 h-6 rounded-full ${isOn2 ? 'bg-yellow-500' : 'bg-[#cdcdcd]'} focus:outline-none`}
    >
      <span
        className={`block w-6 h-6 rounded-full transform transition-transform ${
          isOn2 ? 'translate-x-6' : 'translate-x-0'
        } bg-white shadow-md`}
      ></span>
    </button>
                </div>
            </div>

            <div className='border rounded-bl-md rounded-br-md border-[#CDCDCD] p-1 w-full grid grid-cols-12 justify-center items-center'>
                <div className='col-span-2'><Image src={notify} width="" height=""/></div>
                <div onClick={handleRequestClick} className='col-span-8'><h1>Reset Password</h1></div>
                <div className='col-span-2'>
              
                </div>
            </div>



        </div>


        <div className='flex flex-col w-full  mt-9'>
            <h1>Legal</h1>
            <div className='border mt-2  rounded-tl-md rounded-tr-md border-[#CDCDCD] p-1 w-full grid grid-cols-12 justify-center items-center'>
                <div className='col-span-2'><Image src={notify} width="" height=""/></div>
                <div className='col-span-8'><h1>Terms and Conditions</h1></div>
                <div className='col-span-2'>
                </div>
            </div>

            <div className='border rounded-bl-md rounded-br-md  border-[#CDCDCD] p-1 w-full grid grid-cols-12 justify-center items-center'>
                <div className='col-span-2'><Image src={notify} width="" height=""/></div>
                <div className='col-span-8'><h1>Privacy-policy</h1></div>
                <div className='col-span-2'>
                </div>
            </div>
        </div>


        <div className='flex flex-col w-full mt-5'>
            <div className='border rounded-tl-md rounded-tr-md border-[#CDCDCD] p-1 w-full grid grid-cols-12 justify-center items-center'>
                <div className='col-span-2'><Image src={notify} width="" height=""/></div>
                <div className='col-span-8'><h1>Logout</h1></div>
                <div className='col-span-2'>
                </div>
            </div>

            <div className='border rounded-bl-md rounded-br-md border-[#CDCDCD] p-1 w-full grid grid-cols-12 justify-center items-center'>
                <div className='col-span-2'><Image src={notify} width="" height=""/></div>
                <div className='col-span-8 text-red-500'><h1>Delete Account</h1></div>
                <div className='col-span-2'>
                </div>
            </div>
        </div>



       </section>
    </div>
    </div>
    </div>)}

    {uiState === 'password' && (
        <div>
            <div >
      <div className=''>
    <div className=' bg-white my-5 text-black'>
    <h1 className='text-black font-semibold text-[32px] p-2'>Settings</h1>
    </div>

    <div className='w-[80%] container   border border-gray-200 shadow-lg grid flex flex-col justify-center p-3 '>
    <div className='flex flex-col gap-10 items-center my-7'>
      <div className='flex flex-col gap-5 text-center'>
      <h1 className='font-bold text-[18px]'>Reset Password</h1>
      <h1 className='font-semibold text-[14px]'>Enter the Password you will like to change</h1>
      </div>
        {/*inputs div */}
        <section className='mt-3 flex flex-col w-[25em] gap-2 text-[14px]'>
      <div className=''>
        <h1>Old Password</h1>
      <input className="w-full p-3 border rounded-lg border-[#C4C4C4]" type="email" placeholder="3000"  />

      </div>

      <div className=''>
      <h1>New Password</h1>
      <input className="w-full p-3 border rounded-lg border-[#C4C4C4]" type="email" placeholder="000 xxx 0000 xx56"  />
      </div>
      
      <div className=''>
      <h1>Confirm Password Password</h1>
  <input className=" w-full p-3 border rounded-lg border-[#C4C4C4]" type="email" placeholder="12/24/21"  />

      </div>


      <div className='w-full mt-9'>
      <button className='w-full rounded-lg text-white p-3 bg-[#FF7D00] text-center'>
      <h1>save Changes</h1>
      </button>
      </div>
      </section>

     
      </div>    
    </div>



        </div>
    </div>
    
        </div>
    )}
 
    </Layout>
  )
}

export default page