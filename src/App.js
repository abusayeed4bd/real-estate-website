
import './App.css';
import Navbar from './components/pages/Shared/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Footer from './components/pages/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
