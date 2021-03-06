import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RequireAuth from './require-auth';

import Signin from '../pages/signin/signin.page';
import Signup from '../pages/signup/signup.page';
import Dashboard from '../pages/dashboard/dashboard.page';

import NotFound from '../pages/notfound/notfound.page';
import Forgot from '../pages/forgot/forgot.page';
import Layout from '../components/layout';
import UsersPage from '../pages/users/users-page';
import UserDetailPage from '../pages/users/user-detail-page';

export default function Router() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/users"
          element={
            <RequireAuth>
              <UsersPage />
            </RequireAuth>
          }
        />
        <Route
          path="/users/:id"
          element={
            <RequireAuth>
              <UserDetailPage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
