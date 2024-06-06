// Import the functions you need from react
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Const root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

