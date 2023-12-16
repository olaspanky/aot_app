import React from 'react';
import { useLoginMutation } from '../api/apiSlice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import { setUser } from '../../store/slice/userSlice'; // Make sure to import setUser action from the correct path

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const device_name = formData.get('device_name') || 'web';
  
    try {
      const loginData = { email, password, device_name };
      const response = await login(loginData);
  
      console.log('Response:', response.data);
      console.log('Response:', response);
      console.log('Token value:', response.data.data.token);

  
      // Check if the 'token' field is truthy
      if (response.data.data.token) {
        localStorage.setItem('auth_token', response.data.data.token);
        dispatch(setUser(response.data.data));
        router.push('/dash/dashboard');
      } else {
        console.error('Token not received.');
      }
    } catch (error) {
      console.error('Login error:', error);
      console.error('Response:', error.response); // Log the error response, if available
    }
    
  };

  return (
    <div className="min-h-screen gr py-2 px-4 sm:px-6 place-content-center">
      <div className="mt-9">
          <Image src={logo} width="48" height="48" alt="logo" />
        </div>

    <div className="flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
    
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your Dashboard</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="device_name" className="block text-sm font-medium text-gray-700">
              Device Name
            </label>
            <input
              id="device_name"
              name="device_name"
              type="text"
              autoComplete="off"
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF7D00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          {isError && <div className="text-red-600">{error.message}</div>}
          {isSuccess && <div className="text-green-600">Login successful!</div>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;




