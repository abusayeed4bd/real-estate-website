
import './App.css';
import Navbar from './components/pages/Shared/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Footer from './components/pages/Shared/Footer';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" elemtnt={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
