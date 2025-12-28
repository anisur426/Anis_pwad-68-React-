
import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Service from "./pages/Service"
import Home from './pages/Home';
import BlogEntry from './pages/BlogEntry';
<<<<<<< HEAD
import BlogEntry1 from './pages/BlogEntry1';
=======
import Contact from './pages/Contact';


>>>>>>> 735d23468ddbc8b059ced3b0241a2855a3987651
function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/adblog' element={<BlogEntry />} />
<<<<<<< HEAD
  <Route path='/blogenty1' element={<BlogEntry1 />} />
=======
        <Route path ='/contact' element={<Contact/>}/>

       

>>>>>>> 735d23468ddbc8b059ced3b0241a2855a3987651

      </Routes >

    </div >
  );
}

export default App;
