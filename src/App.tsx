import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
import { AnimatePresence } from 'framer-motion';

import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const location = useLocation();
  return (
    <ThemeProvider>

      <AnimatePresence mode="wait">
        <main className="font-own main-container overflow-x-hidden">
          <div className="mx-auto w-full max-w-212 px-6">
            <Navbar />

            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Portfolio />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:name" element={<ProjectDetails />} />
              <Route path="/contact-me" element={<Contact />} />


              <Route path="*" element={<NotFound />}></Route>
            </Routes>

            <Footer />
          </div>
        </main>
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
