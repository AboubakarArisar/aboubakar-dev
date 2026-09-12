import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Hompage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import NotFound from "./pages/404";
import ScrollToTop from "./pages/ScrollToTop";
import ScrollAnimations from "./components/ScrollAnimations";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollAnimations />
      <a className='skip-link' href='#main'>Skip to content</a>
      <div className='site-shell'>
        <Header />
        <main id='main' tabIndex={-1}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
