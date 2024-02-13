"use client"
import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import signup from '../../../../public/signup.png';
import { useRegisterMutation } from '@/app/api/apiSlice';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import truck from "../../../assets/registertruck.png"
import Link from 'next/link';



const Page = () => {
  const [register, { isLoading, isSuccess, isError, error }] = useRegisterMutation();
  const router = useRouter();


  const initialValues = {
    name: '',
    email_address: '',
    phone_number: '',
    account_type: '',
    company: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Full Name is required'),
    email_address: Yup.string().email('Invalid email address').required('Email address is required'),
    phone_number: Yup.string().required('Phone Number is required').matches(/^[0-9]+$/, 'Invalid phone number').min(10, 'Phone number must be at least 10 digits').max(15, 'Phone number must not exceed 15 digits'),    
    account_type: Yup.string().required('Account Type is required'),
    company: Yup.number(),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await register(values);

      if (isSuccess) {
        // Extract the success message from the API response
        const successMessage = response.data.message;
        router.push('/webapp/verify'); // Replace '/webapp/verify' with your actual route

        console.log('User created successfully:', successMessage);
        // Redirect or show a success message to the user
      } else if (isError) {
        console.error('User creation failed:', error);
        // Handle specific error cases if needed
      }
    } catch (error) {
      console.error('Registration error:', error);
      console.error('Response:', error.response);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="h-full flex  grid grid-cols-2 bg-center "
      
    >
      <section className="col-span-1 md:px-48 h-full bg-white">
        <div className="mt-3">
          <Image src={logo} width="48" height="48" alt="logo" />
        </div>

        {/* welcome back */}
        <section className="flex flex-col gap-3 p-0 mt-5">
          <div>
            <h1 className="text-[20px] font-bold">Create an Account</h1>
          </div>
          <div>
            <p className="text-[12px]">Complete the sign-up process to get started</p>
          </div>
        </section>

        {/* inputs div */}

        <section className="mt-3 flex flex-col gap-3 text-[12px]">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form className="mt-8 space-y-6">
              <div>
                <h2>Full Name</h2>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your full name"
                />
                <ErrorMessage name="name" component="div" />
              </div>

              <div>
                <h2>Email address</h2>
                <Field
                  type="email"
                  id="email_address"
                  name="email_address"
                  autoComplete="email"
                  required
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your email address"
                />
                <ErrorMessage name="email_address" component="div" />
              </div>

              <div>
                <h2>Phone Number</h2>
                <Field
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  autoComplete="tel"
                  required
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage name="phone_number" component="div" />
              </div>

              <div>
                <h2>Account Type</h2>
                <Field
                  as="select"
                  id="account_type"
                  name="account_type"
                  autoComplete="account-type"
                  required
                  className="w-full p-3 border rounded-lg"
                >
                  <option value="" disabled>
                    Select account type
                  </option>
                  <option value="company">Company</option>
                  <option value="customer">Customer</option>
                  <option value="rider">Rider</option>
                  <option value="individual">Individual</option>
                </Field>
                <ErrorMessage name="account_type" component="div" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company (Optional)
                </label>
                <Field
                  type="number"
                  id="company"
                  name="company"
                  autoComplete="off"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your company name"
                />
                <ErrorMessage name="company" component="div" />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  required
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" />
              </div>

              {/* remember */}
              <section className="mt-2 flex text-[12px] justify-between text-black">
                <div className="flex gap-1">
                  <input type="checkbox" />
                  <h2>Remember</h2>
                </div>
                <div>
                  <h2>Forgot Password?</h2>
                </div>
              </section>

              {/* buttons */}
              <section className="mt-3 flex flex-col gap-3 text-[12px]">
                <div>
                  <button type="submit" className="w-full rounded-lg text-white p-3 bg-[#FF7D00] text-center">
                    <h1>Sign up</h1>
                  </button>
                </div>

                {isLoading && <p>Loading...</p>}

                <div>
                  <h1 className="text-center my-1">OR</h1>
                </div>

                <div>
                  <button className="w-full rounded-lg border border-[#FF7D00] p-3 text-[#FF7D00] text-center">
                    <h1>Continue with Google</h1>
                  </button>
                </div>

                <div>
                  <Link href="webapp/login">
                  <h1 className="text-right my-3">Already have an account? Sign In</h1>
                  </Link>
                </div>
              </section>
            </Form>
          </Formik>
        </section>
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

export default Page;
