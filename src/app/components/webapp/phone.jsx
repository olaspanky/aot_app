import React from 'react';
import 'react-phone-number-input/style.css';

const countryOptions = [
  { value: 'US', label: '+1 (US)' },
  { value: 'GB', label: '+44 (UK)' },
  // Add more country options as needed
];

const PhoneNumberInput = ({ value, onChange, country, onCountryChange }) => {
  return (
    <div className="grid w-full gap-3 grid-cols-9 justify-center">
      <div className="col-span-3">
       
      </div>
      <div className="col-span-6 text-black">
      <input className="w-full p-2 border-2 border-gray-300 rounded-xl" type="email" placeholder="enter password"  />
       
      </div>
    </div>
  );
};

export default PhoneNumberInput;
export { countryOptions }; // Export countryOptions variable

