import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { LOGIN } from 'src/constants/routes';

import { getTodos } from 'src/api/handleTodo';

import Spinner from 'src/components/Spinner';

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
      <div className="h-screen">
        <Spinner />
      </div>
    );

  if (location.pathname === '/' && !logined) {
    return <Navigate to={LOGIN} />;
  }

  if (location.pathname !== '/' && logined) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
