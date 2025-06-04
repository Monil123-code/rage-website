import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => (
  <nav className="bg-black text-white shadow-md p-4 flex justify-center gap-6 text-lg sticky top-0 z-50">
    <Link to="/" className="hover:text-[#a3f7b5] transition">Home</Link>
    <Link to="/collection" className="hover:text-[#a3f7b5] transition">Collection</Link>
    <Link to="/contact" className="hover:text-[#a3f7b5] transition">Contact</Link>
    <Link to="/cart" className="hover:text-[#a3f7b5] transition">Cart</Link>
  </nav>
);

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const HomePage = () => (
  <motion.main {...pageTransition} className="bg-[#111827] min-h-screen text-white p-8 font-sans">
    <div className="max-w-6xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-6xl font-extrabold mb-2 tracking-tight">Real Rage</h1>
        <p className="text-2xl text-[#40c9a2]">Where Indian Heritage Meets Street Culture</p>
        <Link to="/collection">
          <button className="mt-6 px-6 py-3 bg-[#2f9c95] text-white rounded-full text-lg hover:bg-[#258f88] transition">
            Explore the Collection
          </button>
        </Link>
      </header>
      <section className="bg-[#1f2937] shadow-xl rounded-2xl p-6 mb-6">
        <h2 className="text-3xl font-semibold mb-2">Our Story</h2>
        <p className="mb-4">Real Rage was born from a compliment on a t-shirt and a father’s vast knowledge of high-end fabrics. Founded by Himanshu Grover in 2025, we fuse Indian culture with global streetwear for bold self-expression.</p>
        <img src="/images/realrage-homepage.png" alt="Real Rage AI Generated Homepage" className="rounded-xl mx-auto w-full max-w-4xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <img src="/images/ai-streetwear1.png" alt="Streetwear 1" className="rounded-xl w-full" />
          <img src="/images/ai-streetwear2.png" alt="Streetwear 2" className="rounded-xl w-full" />
          <img src="/images/ai-streetwear3.png" alt="Streetwear 3" className="rounded-xl w-full" />
        </div>
      </section>
      <section className="bg-[#1f2937] shadow-xl rounded-2xl p-6 mb-6">
        <h2 className="text-3xl font-semibold mb-2">Our Mission</h2>
        <p>To redefine global streetwear by combining bold silhouettes with authentic Indian fabrics—accessible to all through Walmart.</p>
        <h3 className="text-2xl mt-4 font-semibold">Our Vision</h3>
        <p>To be the go-to brand for culture-rich streetwear—empowering creative rebellion worldwide.</p>
      </section>
      <section className="bg-[#1f2937] shadow-xl rounded-2xl p-6 mb-6">
        <h2 className="text-3xl font-semibold mb-2">Brand Values</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Cultural Pride</strong> – Celebrating Indian heritage.</li>
          <li><strong>Sustainability</strong> – Ethical materials and labor.</li>
          <li><strong>Accessibility</strong> – Fashion without borders.</li>
          <li><strong>Authenticity</strong> – Real storytelling through fabric.</li>
          <li><strong>Innovation</strong> – Leading the streetwear revolution.</li>
          <li><strong>Collaboration</strong> – Building with artists and artisans.</li>
        </ul>
      </section>
      <section className="bg-[#1f2937] shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-semibold mb-2">Positioning Strategy</h2>
        <p>We don’t follow trends—we start them. Real Rage brings the raw energy of Indian street style to the global scene. Affordable, bold, and rooted in real stories.</p>
      </section>
    </div>
  </motion.main>
);

// Collection, Contact, and Cart pages omitted here for brevity
const NotFoundRedirect = () => <Navigate to="/" replace />;

const App = () => {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundRedirect />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
