import React from 'react';
import { removeToken } from 'src/utils/accessToken';

export default function LogoutButton() {
  const logout = () => {
    removeToken();
    window.location.reload();
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
