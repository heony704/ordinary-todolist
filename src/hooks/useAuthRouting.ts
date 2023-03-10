import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getToken } from 'src/utils/accessToken';

export default function useAuthRouting() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' && getToken()) navigate('/');
    else if (location.pathname === '/' && !getToken()) navigate('/login');
  }, [navigate]);
}
