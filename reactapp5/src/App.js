
import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Service from "./pages/Service"
import Home from './pages/Home';
import BlogEntry from './pages/BlogEntry';
function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/adblog' element={<BlogEntry />} />

      </Routes>

    </div>
  );
}

export default App;
