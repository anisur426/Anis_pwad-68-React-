import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TopNav from './component/TopNav';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNav />
      <Navbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
