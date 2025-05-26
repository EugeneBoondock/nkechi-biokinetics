import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Footer, PageTransition } from './components';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes location={location}>
          <Route path="/" element={
            <AnimatePresence mode="wait">
              <PageTransition key="home"><Home /></PageTransition>
            </AnimatePresence>
          } />
          <Route path="/about" element={
            <AnimatePresence mode="wait">
              <PageTransition key="about"><About /></PageTransition>
            </AnimatePresence>
          } />
          <Route path="/services" element={
            <AnimatePresence mode="wait">
              <PageTransition key="services"><Services /></PageTransition>
            </AnimatePresence>
          } />
          <Route path="/contact" element={
            <AnimatePresence mode="wait">
              <PageTransition key="contact"><Contact /></PageTransition>
            </AnimatePresence>
          } />
          <Route path="/book" element={
            <AnimatePresence mode="wait">
              <PageTransition key="book"><Booking /></PageTransition>
            </AnimatePresence>
          } />
          <Route path="*" element={
            <AnimatePresence mode="wait">
              <PageTransition key="notfound"><NotFound /></PageTransition>
            </AnimatePresence>
          } />
        </Routes>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
