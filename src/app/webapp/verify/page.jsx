"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import PhoneNumberInput, { countryOptions } from "../../components/webapp/phone"; // Import the countryOptions here
import { useState, useRef } from 'react'
import background from "../../../../public/signup.png"
import { useVerifyUserMutation, useResendOtpMutation } from '@/app/api/apiSlice';
import safe from "../../../assets/safe.png"

const page = ({ userId }) => {
  const [otp, setOtp] = useState('');
  const [verifyUser, { isLoading, isError, isSuccess, error }] = useVerifyUserMutation();

  const handleVerification = () => {
    const combinedOtp = otpDigits.join('');
    verifyUser({ type: 'both', otp, device_name: deviceName, user_id: userId });
  };

  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const [deviceName] = useState('web');
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];


  const handleOtpChange = (index, value) => {
    setOtpDigits((prevDigits) => {
      const newDigits = [...prevDigits];
      newDigits[index] = value;

      if (value && index < inputRefs.length - 1) {
        // Move focus to the next input
        inputRefs[index + 1].current.focus();
      }

      return newDigits;
    });
  };

  const [resendOtp, { isLoading: isResending, isError: resendError, isSuccess: resendSuccess, error: resendErrorMessage }] = useResendOtpMutation();

  const handleResend = async (e) => {
    e.preventDefault();

    try {
      const response = await resendOtp(userId);

      // Handle response, maybe show a success message
      console.log(response);

      // Clear the OTP digits and reset focus to the first input
      setOtpDigits(['', '', '', '']);
      inputRefs[0].current.focus();
    } catch (error) {
      // Handle API error
    }
  };


  return (
    <div
    className="grid grid-cols-2 h-full  bg-center "
    >
      <section className="col-span-1 h-full bg-white py-[20px] px-[119px]">
      {/*logo */}

      <div className='pt-[44px]'>
      <Image src={logo} width="60px" height="60px" alt='logo'/>
      </div>

        {/* verification */}
            <section className='flex flex-col h-full w-[100%] py-24 '>
            <div className='w-full items-start'>

            <div className='flex flex-col gap-1'>
            <h1 className='text-[28px]'>Verify Phone Number</h1>
            <p className='text-[20px] w-full font-lig[70px]'>Please enter the OTP sent to 0709******98</p>
            </div>
            
            <div>
                <form action="" method="post">
                  <div className="flex flex-col gap-4 my-4">
                  <div className="flex flex-row gap-2 mx-auto w-full">

                  {otpDigits.map((digit, index) => (
          <div key={index} className="w-[70px] h-[70px]">
            

            <input
              ref={inputRefs[index]} // Set the ref for each input
              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg shadow-lg border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
              type="text"
              maxLength={1} // Allow only one character per input
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
            />
          </div>
        ))}
        </div>
        
                    <div className="flex flex-col">
        
                      
                        <div className="flex flex-row text-left text-sm font-medium space-x-1 text-gray-500">
        {isSuccess ? (
          <p>OTP Verified</p>
        ) : (
          <>
            <p>Haven't received our code? </p>
            <a className="flex flex-row items-center text-blue-600" href="#resend" onClick={handleResend}>
              Resend
            </a>
          </>
        )}
   
                      </div>
                    </div>




                    <section className='mt-[37px] '>
      <div>
      <button onClick={handleVerification} className='w-full rounded-lg text-white p-5 text-[16px] bg-[#FF7D00] text-center'>
      <h1>Confirm</h1>
      </button>
      </div>

      {isSuccess && <p>User verified successfully!</p>}
      {isError && <p>Error: {error.message}</p>}

      </section>

                  </div>
                </form>
              </div>

            </div>
            
            </section>
      </section>

      <section className='col-span-1 bg-[#FF7D00] grid place-content-center relative'>
  <div className='relative'>
    {/* Circle */}
    <div className='w-96 h-96 rounded-full bg-yellow-200'></div>

    {/* Image */}
    <div className='absolute top-48'>
      <Image src={safe} />
    </div>
  </div>
</section>
    </div>
  )
}

export default page
