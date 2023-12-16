import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { clearUser } from '../../store/slice/userSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication token from local storage
    localStorage.removeItem('auth_token');

    // Clear user data from Redux store
    dispatch(clearUser());

    // Redirect to login page
    router.push('/');
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
