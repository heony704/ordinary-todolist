import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { getToken } from 'src/utils/accessToken';

export default function Authorization() {
  const location = useLocation();

  if (location.pathname === '/' && !getToken()) {
    return <Navigate to="/login" />;
  }

  if (location.pathname !== '/' && getToken()) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
