import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import { Nav } from './components/Nav';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';



function App() {
  return (
    <>
        <Nav/> 
        {/* Definición de rutas para la app */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* Esta linea me sirve para direccionar rutas que no existen */}
            <Route path="/*" element={<Navigate to="/" />} /> 
        </Routes>
    </>
  );
}

export default App;
