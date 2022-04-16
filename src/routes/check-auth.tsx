import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function IsAuthenticated() {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, []);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <></>;
}
