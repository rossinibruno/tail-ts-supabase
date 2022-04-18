import React from 'react';
import Context from './context';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from './styles/global.style';

function App() {
  return (
    <div data-theme="garden">
      <BrowserRouter>
        <Context>
          <GlobalStyle />
          <Toaster position="top-center" />
          <Router />
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
