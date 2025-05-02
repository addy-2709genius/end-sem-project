import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import JuniorForum from './components/JuniorForum';
import SeniorForum from './components/SeniorForum';
import Events from './components/Events';
import Sports from './components/Sports';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juniors" element={<JuniorForum />} />
          <Route path="/seniors" element={<SeniorForum />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
