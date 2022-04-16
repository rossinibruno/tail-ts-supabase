import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RequireAuth from './require-auth';

import Signin from '../pages/signin/signin.page';
import Signup from '../pages/signup/signup.page';
import Dashboard from '../pages/dashboard/dashboard.page';

import NotFound from '../pages/notfound/notfound.page';
import Forgot from '../pages/forgot/forgot.page';

export default function Router() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
