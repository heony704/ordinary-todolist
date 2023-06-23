import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import Spinner from 'src/components/Spinner';
import { getTodos } from 'src/api/handleTodo';

export default function Authorization() {
  const [loading, setLoading] = useState(true);
  const [logined, setLogined] = useState(false);
  const location = useLocation();

  useEffect(() => {
    getTodos()
      .then(() => {
        setLogined(true);
      })
      .catch(() => {
        setLogined(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Spinner />
      </div>
    );

  if (location.pathname === '/' && !logined) {
    return <Navigate to="/login" />;
  }

  if (location.pathname !== '/' && logined) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
