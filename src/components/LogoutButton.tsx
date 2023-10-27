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
      className="py-1.5 px-2.5 rounded-lg font-medium text-sm border focus:ring-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:text-blue-700 bg-gray-50 text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-primary-600 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
      onClick={logout}
    >
      Logout
    </button>
  );
}
