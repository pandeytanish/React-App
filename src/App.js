import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Componenta/Home';
import About from './Componenta/About';
import Info from './Componenta/Info';
import Navbar from './Componenta/Navbar';

function App() {
  return(
  <>
  <Navbar/>
<Routes>
  <Route path="/Home" element={<Home/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/Info" element={<Info/>} />
</Routes>
</>
  );
}

export default App;
