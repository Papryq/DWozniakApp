import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path='blog/:id' element={<BlogPage />} />
            <Route path='Kontakt' element={<Contact />} />
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
