import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Homepage from "./pages/Hompage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import NotFound from "./pages/404";
import ScrollToTop from "./pages/ScrollToTop";
import CustomCursor from "./components/CustomCursor";
import AuroraBackground from "./components/AuroraBackground";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location}>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <AuroraBackground />
      <div className='grain relative flex min-h-screen flex-col'>
        <Header />
        <main className='flex-grow'>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
