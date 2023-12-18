// pages/login.js
"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './webapp/login'; // Adjust the path

const LoginPage = () => {
  // Get the 'user' state from the Redux store using useSelector
  const user = useSelector((state) => state.user);

  return (
    <div>
      <LoginForm user={user} />
    </div>
  );
};

export default LoginPage;
