
import './App.css';
import Navbar from './components/pages/Shared/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
