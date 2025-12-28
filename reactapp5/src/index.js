import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TopNav from './component/TopNav';
import { BrowserRouter } from 'react-router-dom';
import Footer from './component/Footer';
import Navbar from './component/Navbar';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNav />
      <Navbar />
      
<<<<<<< HEAD

      <App />
      <Footer />
=======
      <App />
      <Footer />

>>>>>>> 735d23468ddbc8b059ced3b0241a2855a3987651
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
