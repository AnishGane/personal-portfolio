import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <main className="font-own main-container">
      <div className="mx-auto w-full max-w-3xl px-6">
        <Navbar />

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>

        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default App;
