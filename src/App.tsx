import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';

import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';

const App = () => {
  return (
    <main className="font-own main-container">
      <div className="mx-auto w-full max-w-3xl px-6">
        <Navbar />

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:name" element={<ProjectDetails />} />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </div>
    </main>
  );
};

export default App;
