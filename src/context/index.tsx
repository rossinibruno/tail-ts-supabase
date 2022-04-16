import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
}
