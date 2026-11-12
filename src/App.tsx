import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  FiMapPin,
  FiUser,
  FiCode,
  FiLayers,
  FiCpu,
} from 'react-icons/fi';

import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';
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
        <section className="mx-auto grid min-h-screen w-full max-w-8xl grid-cols-1 px-4 sm:grid-cols-4 sm:px-6">
          <main className="main-container font-own min-w-0 overflow-x-hidden sm:col-span-3">
            <div className="mx-auto w-full max-w-240 px-5 sm:border-x sm:px-10 md:px-20 dark:border-neutral-8">
              <Navbar />

              <Routes location={location} key={location.pathname}>
                <Route index element={<Portfolio />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:name" element={<ProjectDetails />} />
                <Route path="/contact-me" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

              <Footer />
            </div>
          </main>

          <aside className="w-full bg-pink-400/60 rounded-md pb-8 sm:pb-0 sm:col-span-1 sm:pt-0 sm:mt-40 h-fit">
            <div className="mx-auto w-full max-w-xl rounded-md border border-neutral-6/30 bg-white/70 p-6 shadow-sm dark:bg-neutral-900/50">
              <p className="mb-6 font-tooltip text-xs font-bold tracking-widest text-neutral-6">
                PERSONAL INFORMATION
              </p>

              <dl className="space-y-5">
                <DLDiv
                  icon={<FiMapPin />}
                  text1="ADDRESS"
                  text2="Doodhpati, Near Siddhapokhari"
                />
                <DLDiv
                  icon={<FiUser />}
                  text1="ROLE"
                  text2="MERN Stack Developer"
                />
                <DLDiv
                  icon={<FiCode />}
                  text1="BUILDING WITH"
                  text2="React · TypeScript"
                />
                <DLDiv
                  icon={<FiLayers />}
                  text1="CURRENT FOCUS"
                  text2="Building clean, user-friendly web apps"
                />
                <DLDiv
                  icon={<FiCpu />}
                  text1="EXPLORING"
                  text2="Python · Generative AI"
                />
              </dl>
            </div>
          </aside>
        </section>
      </AnimatePresence>
    </ThemeProvider>
  );
};

type DLDivProps = {
  icon: React.ReactNode;
  text1: string;
  text2: string;
};

const DLDiv = ({ icon, text1, text2 }: DLDivProps) => (
  <div className="flex gap-3">
    <span className="mt-0.5 shrink-0 text-neutral-6" aria-hidden="true">
      {icon}
    </span>
    <div>
      <dt className="font-tooltip text-xs font-medium tracking-wide text-neutral-8">
        {text1}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-neutral-6">{text2}</dd>
    </div>
  </div>
);

export default App;