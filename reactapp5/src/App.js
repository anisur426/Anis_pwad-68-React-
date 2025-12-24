
import { Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Service from "./pages/Service"
import Home from './pages/Home';
function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path='/Service' element={<Service />} />

      </Routes>

    </div>
  );
}

export default App;
