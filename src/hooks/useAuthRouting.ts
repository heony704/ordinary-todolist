import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function useAuthRouting() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' && localStorage.getItem('access_token'))
      navigate('/');
    else if (location.pathname === '/' && !localStorage.getItem('access_token'))
      navigate('/login');
  }, [navigate]);
}
