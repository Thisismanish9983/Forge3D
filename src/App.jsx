import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Models from './pages/Models';
import ModelDetails from './pages/ModelDetails';
import CustomOrder from './pages/CustomOrder';
import Process from './pages/Process';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// 404 Fallback component
function NotFound() {
  return (
    <div className="min-h-screen pt-40 pb-20 flex items-center justify-center bg-graphite-950 text-center px-4">
      <div className="max-w-md space-y-5">
        <div className="font-mono text-6xl font-black text-copper-500">404</div>
        <h1 className="font-display font-bold text-3xl text-white">Non-Manifold Coordinate</h1>
        <p className="text-slate-400 text-sm">
          The 3D model or URL you requested is outside the build volume or does not exist on our servers.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-copper-500 text-white font-medium hover:bg-copper-600 transition-colors shadow-glow-copper"
          >
            Return to Studio Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-graphite-950 text-slate-100 selection:bg-copper-500 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/models" element={<Models />} />
            <Route path="/models/:id" element={<ModelDetails />} />
            <Route path="/custom-order" element={<CustomOrder />} />
            <Route path="/process" element={<Process />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
