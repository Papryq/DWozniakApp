import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ClockCards from './components/ClockCards';
import Quote from './components/Quote';
import CarpetCards from './components/CarpetCards';
import BlogCards from './components/BlogCards';
import Footer from './components/Footer';
import WebCloser from './components/WebCloser';

function App() {
  return (
    <>
        <Navbar />
        <Header />
        <Quote />
        <ClockCards />
        <CarpetCards />
        <BlogCards />
        <Footer />
        <WebCloser />
    </>
  );
}

export default App;
