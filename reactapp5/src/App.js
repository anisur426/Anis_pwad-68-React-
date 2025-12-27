
import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Service from "./pages/Service"
import Home from './pages/Home';
import BlogEntry from './pages/BlogEntry';
import Contact from './pages/Contact';


function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/adblog' element={<BlogEntry />} />
        <Route path ='/contact' element={<Contact/>}/>

       


      </Routes>

    </div>
  );
}

export default App;
