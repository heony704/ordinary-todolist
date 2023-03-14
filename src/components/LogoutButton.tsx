import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeToken } from 'src/utils/accessToken';

export default function LogoutButton() {
  const navigate = useNavigate();
  const logout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <button
      type="button"
      className="button-rounded-sm button-gray"
      onClick={logout}
    >
      Logout
    </button>
  );
}
