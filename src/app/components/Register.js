import React, { useState } from 'react';
import { useRegisterMutation } from '../api/apiSlice'; // Adjust the path

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email_address: '',
    phone_number: '',
    account_type: '',
    company: '',
    password: '',
    // "name": "Aiken Geln",
    // "email_address": "johndoe@mail.com",
    // "phone_number": "08147775048",
    // "account_type": "rider",
    // "company": 1000000,
    // "password": "password123"
  });

  const [register, { isLoading, isSuccess, isError, error }] = useRegisterMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await register(formData);

      if (response) {
        console.log('User created successfully.');
        // Redirect or show a success message
      } else {
        console.error('User creation failed.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      console.error('Response:', error.response);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register an Account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              onChange={handleInputChange}
              value={formData.name}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email_address"
              name="email_address"
              type="email"
              autoComplete="email"
              required
              onChange={handleInputChange}
              value={formData.email}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone_number"
              name="phone_number"
              type="tel"
              autoComplete="tel"
              required
              onChange={handleInputChange}
              value={formData.phone_number}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="account_type" className="block text-sm font-medium text-gray-700">
              Account Type
            </label>
            <select
              id="account_type"
              name="account_type"
              autoComplete="account-type"
              required
              onChange={handleInputChange}
              value={formData.account_type}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            >
              <option value="" disabled>Select account type</option>
              <option value="company">Company</option>
              <option value="customer">Customer</option>
              <option value="rider">Rider</option>
            </select>
          </div>
          <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
              Company (Optional)
            </label>
            <input
              id="company"
              name="company"
              type="number"
              autoComplete="off"
              onChange={handleInputChange}
              value={formData.company}
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
              autoComplete="new-password"
              required
              onChange={handleInputChange}
              value={formData.password}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </div>
          {isError && <div className="text-red-600">{error.message}</div>}
          {isSuccess && <div className="text-green-600">Registration successful!</div>}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
