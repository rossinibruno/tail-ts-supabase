import React from 'react';
import Context from './context';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div data-theme="garden">
      <BrowserRouter>
        <Context>
          <Toaster position="top-right" />
          <Router />
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
