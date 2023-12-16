"use client"
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'; // Use 'next/router' instead of 'next/navigation'
import { selectUser } from '../../store/slice/userSlice'; // Update the path

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (!token || !user) {
        // Redirect to login page if no token or user
        router.push('/');
      }
    }
  }, [user]); // Include 'user' in the dependency array to react to user changes

  if (!user) {
    // You might want to handle the case where user data is not available yet
    // For example, you could show a loading spinner
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
