
import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';

import Home from './pages/Home';
function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Hero" element={<Hero />} />

        {/* <Route path="/Contact" element={<Contact />} /> */}
        {/* <Route path='/Service' element={<Service />} /> */}

      </Routes>

    </div>
  );
}

export default App;
