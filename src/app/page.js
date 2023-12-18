
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import { useLoginMutation, useRequestPasswordResetMutation, useResetPasswordMutation } from '../../api/apiSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slice/userSlice';
import truck from "../../../assets/logintruck.png"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = ({ user }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login] = useLoginMutation();
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [resetValue, setResetValue] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetPassword] = useResetPasswordMutation();
  const [requestPasswordReset] = useRequestPasswordResetMutation();
  const [loginError, setLoginError] = useState(null); // State to hold login error


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const device_name = formData.get('device_name') || 'web';
  
    try {
      const loginData = { email, password, device_name };
      const response = await login(loginData);
  
      console.log('API Response:', response); // Log the entire response object
  
      if (response.data && response.data.data.token) {
        localStorage.setItem('auth_token', response.data.data.token);
        dispatch(setUser(response.data.data));
        router.push('/webapp/home');
      } else {
        console.error('Token not received.');
        setLoginError(response.error.data.message)
      }
    } catch (error) {
      console.error('Login error:', error);
      console.error('Response:', error.response);
    }
  };
  

  const handlePasswordReset = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('email_or_phone', resetValue);

    try {
      const response = await requestPasswordReset(formData);

      if (response.data.status === false) {
        console.log('Password reset request failed:', response.data.message);
      } else {
        console.log('Password reset request successful');
      }
    } catch (error) {
      console.error('Password reset error:', error);
    }

    closeEmailModal();
  };

  const handleSendOtp = async () => {
    const formData = new FormData();
    formData.append('email_or_phone', resetValue);

    try {
      const response = await requestPasswordReset(formData);

      if (response.data.status === false) {
        console.log('OTP send failed:', response.data.message);
      } else {
        console.log('OTP sent successfully');
        setOtp(response.data.otp);
      }
    } catch (error) {
      console.error('OTP send error:', error);
    }
  };

  const openEmailModal = () => {
    setShowEmailModal(true);
  };

  const closeEmailModal = () => {
    setShowEmailModal(false);
  };

  return (
    <div className=" grid grid-cols-2">
      <section className="md:col-span-1 w-full px-2 md:px-48 h-screen bg-white">
        <div className="mt-9">
          <Image src={logo} width="48" height="48" alt="logo" />
        </div>

        <section className="mt-20">
          <div>
            <h1 className="text-[20px] font-bold">Welcome back</h1>
          </div>
        </section>
        {loginError && <p className="text-red-500">{loginError}</p>}

        <form className="" onSubmit={handleSubmit}>
          <section className="mt-5 flex flex-col gap-3 text-[12px]">
            <div>
              <h2>Email address</h2>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full p-3 border rounded-lg"
                placeholder="Enter email"
              />
            </div>

            <div>
              <h2>Password</h2>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full p-3 border rounded-lg"
                placeholder="Enter password"
              />
            </div>
          </section>

          <section className="mt-2 flex text-[12px] justify-between text-black">
            <div className="flex gap-1">
              <input type="checkbox" />
              <h2>Remember</h2>
            </div>
            <div>
              {!otp && (
                <button onClick={handleSendOtp} className="text-[#FF7D00] underline cursor-pointer">
                  Send OTP
                </button>
              )}
            </div>
          </section>

          <section className="mt-[37px] text-[12px]">
            <div>
              <button className="w-full rounded-lg text-white p-3 text-[16px] bg-[#FF7D00] text-center">
                <h1>Sign in</h1>
              </button>
            </div>

            <div>
              <h1 className="text-center my-[16px]">OR</h1>
            </div>

            <div>
              <button className="w-full rounded-lg border border-[#FF7D00] p-3 text-[16px] text-[#FF7D00] text-center">
                <h1>Continue with Google</h1>
              </button>
            </div>

            <div>
              <h1 className="text-right my-[16px]">Don’t have an account? Sign Up</h1>
            </div>
          </section>
        </form>

        {showEmailModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-4 w-80 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">
                Enter Email or Phone for Password Reset
              </h2>
              <form onSubmit={handlePasswordReset}>
                <input
                  type="text"
                  name="resetValue"
                  placeholder="Enter your email or phone"
                  className="px-3 py-2 border rounded-lg w-full mb-2"
                  value={resetValue}
                  onChange={(e) => setResetValue(e.target.value)}
                  required
                />
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#FF7D00] text-white rounded-lg"
                  >
                    Reset Password
                  </button>
                  <button
                    type="button"
                    onClick={closeEmailModal}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg ml-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
      <section className='col-span-1 bg-[#FF7D00] grid place-content-center relative'>
  <div className='relative'>
    {/* Circle */}
    <div className='w-96 h-96 rounded-full bg-yellow-200'></div>

    {/* Image */}
    <div className='absolute top-48'>
      <Image src={truck} />
    </div>
  </div>
</section>
    </div>
  );
};

export default LoginPage;
