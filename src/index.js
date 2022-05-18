import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { /*YourProvider*/ } from './context/';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <YourProvider> */}
      <App />
    {/* </YourProvider> */}
  </React.StrictMode>
);
